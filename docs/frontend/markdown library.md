# markdown library

## 과정

```txt
Markdown  → (remark)  → HTML AST → (rehype) → 최종 HTML
```

## install

```sh
npm i markdown-it # CommonMark + 확장, 플러그인 생태계 풍부, 속도/안정성 밸런스 좋음
npm i marked # 심플/빠름, 직접 제어할 때 좋음(반드시 sanitize를 처리해야 함)
npm i micromark # 저수준 파서(토큰→HTML/AST) 커스텀 파이프라인 빌드용

# react
npm i react-markdown # 내부적으로 markdown-it를 사용
npm i @mdx-js/react # MDX 지원

# angular
npm i ngx-markdown # 내부적으로 marked를 사용

# code highlight
npm i prismjs
npm i highlight.js
npm i shiki

# rehype
npm i rehype-pretty-code
npm i rehype-prism-plus
npm i rehype-sanitize
npm i rehype-minify
```
