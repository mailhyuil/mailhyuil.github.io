# js import 방법 3가지

## ES Modules

```js
import Editor from "@toast-ui/editor";
```

## CommonJS

```js
const Editor = require("@toast-ui/editor");
```

## Browser Environment

```js
const Editor = toastui.Editor;
```

## 다양한 방법들

```js
// CDN import
import { selectAll } from "https://cdn.jsdelivr.net/npm/d3-selection@3/+esm";
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// script tag CDN import
<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>;

// import everything
import * as d3 from "d3";

// import individual modules
import { scaleLinear } from "d3-scale";

// import everything dynamically
const d3 = await import("d3");

// import individual modules dynamically
const d3 = await Promise.all([import("d3-format"), import("d3-geo"), import("d3-geo-projection")]).then((d3) => Object.assign({}, ...d3));
```
