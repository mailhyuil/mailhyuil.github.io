# tailwindcss 테일윈드

- watch

`npx tailwindcss ./src/style.css -o ./public/style.css --watch`

## flowbite

- npm 설치
`npm i flowbite`

- tailwind.config.js
```
module.exports = {
    content: [
        "./public/**/*.html", "./node_modules/flowbite/**/*.js"
        ],
    plugins: [
        require('flowbite/plugin')
    ],
}
```

- script 파일 추가
`<script src="../node_modules/flowbite/dist/flowbite.js"></script>`