# html shadow DOM example

## button.js

```js
class MyButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = html`
      <button>
        <slot></slot>
      </button>
    `;
  }
}
customElements.define("my-button", MyButton);
```

## usage

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shadow DOM Example</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <my-button>click me!</my-button>
  </body>
  <script src="button.js" type="module"></script>
</html>
```
