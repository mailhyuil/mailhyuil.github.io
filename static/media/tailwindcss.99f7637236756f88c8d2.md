# tailwindcss

## install

```bash
npm install -D tailwindcss postcss autoprefixer
```

## tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: "",
      },
      fontFamily: {
        body: ["fontName"],
      },
      backgroundImage: {
        hyuil: "url('/public/img/hyuil.webp')",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar-hide")],
};
```

## style.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## watch

```bash
npx tailwindcss -i ./src/style.css -o ./public/style.css --watch
```

## Reusing Styles

```css
@layer components {
  .btn-primary {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
}
```

## 반응형 (Responsive)

> sm: md: lg: xl: 2xl:
>
> > default 값을 스마트폰 화면이라고 생각하고 큰스크린에 넣을 값에 태그를 붙여라!
> >
> > > (e.g. w-full // 스마트폰 xl:w-64)

## group

### single group

```
class="group ..."
class="group-hover:block"
```

### nested group

```bash
npm i tailwindcss-scoped-groups
```

```js
plugins: [
    require("tailwindcss-scoped-groups")({
        groups: ["one", "two"],
    }),
   ],
```

```
class="group-one ..."
class="group-one-hover:block"
class="group-two ..."
class="group-two-hover:block"
```

## peer

> input, label을 순서대로 넣어야 작동

```js
<input id="1" className="peer/a hidden" type="radio" name="radio" />
<label htmlFor="1" className="peer-checked/a:bg-red-500 peer-checked/a:text-white">
    A
</label>
<input id="2" className="peer/b hidden" type="radio" name="radio" defaultChecked />
<label htmlFor="2" className="peer-checked/b:bg-red-500 peer-checked/b:text-white">
    B
</label>
```

## @typography

- tailwindcss는 @base 부분에서 텍스트의 스타일을 전부 초기화한다
- 스타일을 사용하는 플러그인 (e.g. markdown을 사용하기 위해 text부분을 초기화 하지않도록 @typography 플러그인을 사용한다)
- @typography 플러그인을 설치한 후 클래스명에 "prose"를 넣어주면 된다

---

## button hover effect

```html
<li class="duration-200 ring ring-transparent hover:ring-red-400 hover:scale-125 linear">
  <NuxtLink to="/about">About</NuxtLink>
</li>
```

## flowbite

- npm 설치

```
npm i flowbite
```

### flowbite script 파일 추가

`<script src="../node_modules/flowbite/dist/flowbite.js"></script>`
