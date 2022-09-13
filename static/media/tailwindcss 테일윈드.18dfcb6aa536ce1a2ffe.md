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

## 반응형 (Responsive)
- sm: md: lg: xl: 2xl:
> default 값을 스마트폰 화면이라고 생각하고 큰스크린에 넣을 값에 태그를 붙여라!
- ex) w-full // 스마트폰 xl:w-64