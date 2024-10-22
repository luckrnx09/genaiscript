// crypto.ts - Provides cryptographic functions for secure operations

// Importing the toHex function from the util module to convert byte arrays to hexadecimal strings
import { toHex, utf8Encode } from "./util"
import { getRandomValues, createHash } from "node:crypto"

/**
 * Generates a random hexadecimal string of a specified size.
 *
 * @param size - The number of bytes to generate, which will be converted to a hexadecimal string.
 * @returns A string representing the randomly generated bytes in hexadecimal format.
 */
export function randomHex(size: number) {
    // Create a new Uint8Array with the specified size to hold random bytes
    const bytes = new Uint8Array(size)

    // Fill the array with cryptographically secure random values using the Web Crypto API
    getRandomValues(bytes)

    // Convert the random byte array to a hexadecimal string using the toHex function and return it
    return toHex(bytes)
}

export async function hash(value: any, options?: HashOptions) {
    const { algorithm = "sha-1", length, ...rest } = options || {}

    const h = createHash(algorithm.toUpperCase())
    const append = async (v: any) => {
        if (
            typeof v == "string" ||
            typeof v === "number" ||
            typeof v === "boolean"
        )
            h.update(String(v), "utf8")
        else if (Array.isArray(v)) for (const c of v) await append(c)
        else if (v instanceof Buffer) h.update(v)
        else if (v instanceof Blob)
            h.update(new Uint8Array(await v.arrayBuffer()))
        else if (typeof v === "object")
            for (const c of Object.keys(v).sort()) {
                h.update(c, "utf8")
                await append(v[c])
            }
        else h.update(utf8Encode(JSON.stringify(v)))
    }
    await append(value)
    await append(rest)

    const buf = await h.digest()
    let res = await buf.toString("hex")
    if (length) res = res.slice(0, length)
    return res
}
