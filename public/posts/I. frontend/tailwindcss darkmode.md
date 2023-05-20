# tailwindcss darkmode

## tailwind.config.js

```
module.exports = {
  darkMode: 'class',
};
```

## class

```
<div class="dark:bg-gray-800 text-white"></div>
```

## set

### init

```ts
if (localStorage.getItem("theme") === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
```

### 버튼 logic

```ts
  setDarkMode() {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
  }
  setLightMode() {
    localStorage.setItem('theme', 'light');
    document.documentElement.classList.remove('dark');
  }
```
