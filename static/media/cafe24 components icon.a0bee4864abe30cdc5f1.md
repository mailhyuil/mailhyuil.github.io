# cafe24 components icon

```js
const html = String.raw;

class Icon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  async render() {
    const name = this.getAttribute("name") || "";
    const src = `https://api.iconify.design/${name}.svg`;
    try {
      const response = await fetch(src);
      if (!response.ok) {
        throw new Error("SVG not found");
      }
      const svgContent = await response.text();

      this.shadowRoot.innerHTML = html`
        <style>
          :host {
            display: inline-block;
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
          }
          svg {
            width: 100%;
            height: 100%;
            display: block;
          }
        </style>
        ${svgContent}
      `;
    } catch (error) {
      console.error("Failed to load SVG:", error);
      this.shadowRoot.innerHTML = html` <div>Error loading icon</div> `;
    }
  }
}

customElements.define("app-icon", Icon);
```
