import { codeToHtml } from "shiki"

const terminalCode = `$ npx @autorail/unerr setup
✓ Detected Cursor IDE
✓ Authenticated via GitHub
✓ MCP server configured at localhost:9315
✓ Indexing 3 repositories...
✓ Health audit complete — Grade: A (92/100)

unerr is now supervising your AI agents.`

export async function TerminalCode() {
  const html = await codeToHtml(terminalCode, {
    lang: "shellscript",
    theme: "github-dark-default",
  })

  return (
    <div
      className="terminal-shiki [&_code]:!font-mono [&_code]:!text-[13px] [&_code]:!leading-relaxed [&_pre]:!bg-transparent [&_pre]:!p-0"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
