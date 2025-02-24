# tailwindcss 4

## global.css

```css
@import "tailwindcss";

@source "../node_modules/@my-company/ui-lib";

/* custom theme */
@theme {
  --color-mint-500: oklch(0.72 0.11 178);
  --font-pretendard: "Pretendard", sans-serif;
}

/* using a js config file */
@config "../../tailwind.config.js";

/* using a legacy plugins */
@plugin "@tailwindcss/typography";
```
