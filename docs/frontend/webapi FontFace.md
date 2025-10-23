# FontFace

```js
async function loadFonts() {
  const font = new FontFace("myfont", "url(myfont.woff)", {
    style: "normal",
    weight: "400",
    stretch: "condensed",
  });
  // wait for font to be loaded
  await font.load();
  // add font to document
  document.fonts.add(font);
  // enable font with CSS class
  document.body.classList.add("fonts-loaded");
}
```
