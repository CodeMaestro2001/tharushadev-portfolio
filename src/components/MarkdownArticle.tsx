import type { ReactNode } from "react";

type Block =
  | { kind: "heading"; level: 2 | 3; text: string }
  | { kind: "quote"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "paragraph"; text: string };

function parseMarkdown(markdown: string): Block[] {
  const chunks = markdown.trim().split(/\n\s*\n/).filter(Boolean);
  return chunks.map((chunk) => {
    const lines = chunk.split("\n");
    if (lines[0].startsWith("### ")) return { kind: "heading", level: 3, text: lines.join(" ").slice(4) };
    if (lines[0].startsWith("## ")) return { kind: "heading", level: 2, text: lines.join(" ").slice(3) };
    if (lines.every((line) => /^[-*] /.test(line))) return { kind: "list", items: lines.map((line) => line.replace(/^[-*] /, "")) };
    if (lines.every((line) => line.startsWith("> "))) return { kind: "quote", text: lines.map((line) => line.slice(2)).join(" ") };
    return { kind: "paragraph", text: lines.join("\n") };
  });
}

function inline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\(https?:\/\/[^)]+\))/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("`") && part.endsWith("`")) return <code key={index}>{part.slice(1, -1)}</code>;
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (link) return <a key={index} href={link[2]} target="_blank" rel="noreferrer">{link[1]}</a>;
    return part;
  });
}

export function MarkdownArticle({ body }: { body: string }) {
  return (
    <div className="article-prose">
      {parseMarkdown(body).map((block, index) => {
        if (block.kind === "heading") return block.level === 2 ? <h2 key={index}>{inline(block.text)}</h2> : <h3 key={index}>{inline(block.text)}</h3>;
        if (block.kind === "quote") return <blockquote key={index}>{inline(block.text)}</blockquote>;
        if (block.kind === "list") return <ul key={index}>{block.items.map((item, itemIndex) => <li key={itemIndex}>{inline(item)}</li>)}</ul>;
        return <p key={index}>{inline(block.text)}</p>;
      })}
    </div>
  );
}
