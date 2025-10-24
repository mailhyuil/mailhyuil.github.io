# angular compiler ng-morph - template

> cheerio를 사용

## install

```sh
npm i cheerio
```

## usage

```ts
import fs from "fs";
import path from "path";

const baseDir = path.resolve(__dirname, "../apps/admin");

function walk(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.name.endsWith(".html")) {
      transformFile(fullPath);
    }
  }
}

function transformFile(filePath: string) {
  let content = fs.readFileSync(filePath, "utf8");

  // 정규식: <lepi-icon ...>...</lepi-icon> 또는 <lepi-icon ... />
  const regex = /<lepi-icon([^>]*)name="([^"]+)"([^>]*)\/?>\s*<\/lepi-icon>?/gi;

  const replaced = content.replace(regex, (_, preAttrs, iconName, postAttrs) => {
    // 모든 속성 문자열 합침
    const allAttrs = `${preAttrs} ${postAttrs}`.trim();

    // class 추출
    const classMatch = /class="([^"]*)"/.exec(allAttrs);
    const originalClass = classMatch ? classMatch[1] : "";
    const iconClass = `icon-[${iconName.replace(":", "--")}]`;
    const fullClass = `${originalClass} ${iconClass}`.trim();

    return `<span class="${fullClass}"></span>`;
  });

  if (replaced !== content) {
    fs.writeFileSync(filePath, replaced);
    console.log(`✅ Updated: ${filePath}`);
  }
}

walk(baseDir);
```
