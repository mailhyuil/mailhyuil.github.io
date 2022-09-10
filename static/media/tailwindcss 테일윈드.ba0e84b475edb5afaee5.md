# tailwindcss 테일윈드

- watch

`npx tailwindcss ./src/style.css -o ./public/style.css --watch`

## flowbite

- npm 설치
`npm i flowbite`

## tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/**/*.html", 
        "./node_modules/flowbite/**/*.js"
        ],
    theme: {
        extend: {
                colors:{
                    primary: '#FF6363',
                    secondary: ''
                },
                fontFamily:{
                    body: ['fontName']
                },
                backgroundImage: {
                    "hyuil": "url('/public/img/hyuil.jpg')"
                }
            },
    },
    plugins: [
        require('flowbite/plugin'),
        require("tailwind-scrollbar-hide")
    ],
}
```

- script 파일 추가
`<script src="../node_modules/flowbite/dist/flowbite.js"></script>`