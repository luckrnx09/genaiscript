import type { TextItem } from "pdfjs-dist/types/src/display/api"
import { host } from "./host"
declare global {
    export type SVGGraphics = any
}

export async function PDFTryParse(
    fileOrUrl: string,
    content?: Uint8Array
): Promise<string[]> {
    try {
        const pdfjs = await import("pdfjs-dist")
        const { getDocument } = pdfjs
        const data = content || (await host.readFile(fileOrUrl))
        const loader = await getDocument({
            data,
        })
        const doc = await loader.promise
        const numPages = doc.numPages
        const pages: string[] = []
        for (let i = 0; i < numPages; i++) {
            const page = await doc.getPage(1) // 1-indexed
            const content = await page.getTextContent()
            const items: TextItem[] = content.items.filter(
                (item): item is TextItem => "str" in item
            )
            const parsedPage = parsePageItems(items)
            pages.push(parsedPage.lines.join("\n"))
        }
        return pages
    } catch (error) {
        console.error(error)
        return undefined
    }
}

// to avoid cjs loading issues of pdfjs-dist, move this function in house
// https://github.com/electrovir/pdf-text-reader
function parsePageItems(pdfItems: TextItem[]) {
    const lineData: { [y: number]: TextItem[] } = {}

    for (let i = 0; i < pdfItems.length; i++) {
        const item = pdfItems[i]
        const y = item?.transform[5]
        if (!lineData.hasOwnProperty(y)) {
            lineData[y] = []
        }
        // how how to intentionally test this
        /* istanbul ignore next */
        if (item) {
            lineData[y]?.push(item)
        }
    }

    const yCoords = Object.keys(lineData)
        .map((key) => Number(key))
        // b - a here because the bottom is y = 0 so we want that to be last
        .sort((a, b) => b - a)
        // insert an empty line between any 2 lines where their distance is greater than the upper line's height
        .reduce((accum: number[], currentY, index, array) => {
            const nextY = array[index + 1]
            if (nextY != undefined) {
                const currentLine = lineData[currentY]!
                const currentLineHeight: number = currentLine.reduce(
                    (finalValue, current) =>
                        finalValue > current.height
                            ? finalValue
                            : current.height,
                    -1
                )

                // currentY - nextY because currentY will be higher than nextY
                if (Math.floor((currentY - nextY) / currentLineHeight) > 1) {
                    const newY = currentY - currentLineHeight
                    lineData[newY] = []
                    return accum.concat(currentY, newY)
                }
            }
            return accum.concat(currentY)
        }, [])

    const lines: string[] = []
    for (let i = 0; i < yCoords.length; i++) {
        const y = yCoords[i]
        // idk how to actually test this
        /* istanbul ignore next */
        if (y == undefined) {
            continue
        }
        // sort by x position (position in line)
        const lineItems = lineData[y]!.sort(
            (a, b) => a.transform[4] - b.transform[4]
        ).filter((item) => !!item.str)
        const firstLineItem = lineItems[0]!
        let line = lineItems.length ? firstLineItem.str : ""
        for (let j = 1; j < lineItems.length; j++) {
            const item = lineItems[j]!
            const lastItem = lineItems[j - 1]!
            const xDiff =
                item.transform[4] - (lastItem.transform[4] + lastItem.width)

            // insert spaces for items that are far apart horizontally
            // idk how to trigger this
            /* istanbul ignore next */
            if (
                item.height !== 0 &&
                lastItem.height !== 0 &&
                (xDiff > item.height || xDiff > lastItem.height)
            ) {
                const spaceCountA = Math.ceil(xDiff / item.height)
                let spaceCount = spaceCountA
                if (lastItem.height !== item.height) {
                    const spaceCountB = Math.ceil(xDiff / lastItem.height)
                    spaceCount =
                        spaceCountA > spaceCountB ? spaceCountA : spaceCountB
                }
                line += Array(spaceCount).fill("").join(" ")
            }
            line += item.str
        }
        lines.push(line)
    }

    return {
        lines,
    }
}
