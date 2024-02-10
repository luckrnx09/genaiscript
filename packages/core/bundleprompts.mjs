import { readdirSync, readFileSync, writeFileSync } from "fs"
const dir = "./src/genaisrc"
const fp = "./src/default_prompts.ts"
console.debug(`bundling ${dir}/*.genai.js into default_prompts.ts`)
const promptMap = {}
const ftMap = {}
const prompts = readdirSync(dir)
for (const prompt of prompts) {
    if (!prompt.endsWith(".js")) continue
    const text = readFileSync(`${dir}/${prompt}`, "utf-8")

    if (prompt.endsWith(".genai.js"))
        promptMap[prompt.replace(/\.genai\.js$/i, "")] = text
}
const promptDefs = {
    ".gitattributes": "genaiscript.d.ts -diff merge=ours linguist-generated",
    "jsconfig.json": JSON.stringify(
        {
            compilerOptions: {
                lib: ["ES2022"],
                target: "ES2022",
                module: "ES2022",
                moduleDetection: "force",
                checkJs: true,
                allowJs: true,
            },
            include: ["*.js", "./genaiscript.d.ts"],
        },
        null,
        4
    ),
    "genaiscript.d.ts": ["./src/prompt_template.d.ts", "./prompt_type.d.ts"]
        .map((fn) => readFileSync(fn, { encoding: "utf-8" }))
        .map((src) =>
            src.replace(/^\/\/\/\s+<reference\s+path="[^"]+"\s*\/>\s*$/gm, "")
        )
        .join("\n\n"),
}

const text = `// autogenerated - node bundleprompts.mjs
export const defaultPrompts: Record<string, string> = ${JSON.stringify(
    promptMap,
    null,
    4
)};

export const promptDefinitions: Record<string, string> = ${JSON.stringify(
    promptDefs,
    null,
    4
)};
\n`

writeFileSync(fp, text, "utf-8")
