# d3 간단한 BarChart

```js
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
let data = [
  { name: "Apple", amount: 10 },
  { name: "Orange", amount: 20 },
  { name: "Mange", amount: 30 },
];
const width = 960;
const height = 500;
const svg = d3.create("svg").attr("width", width).attr("height", height);

const x_scale = d3
  .scaleBand()
  .range([0, width])
  .domain(data.map((d) => d.name));

const y_scale = d3
  .scaleLinear()
  .range([height, 0])
  .domain([0, d3.max(data, (d) => d.amount)]);

svg
  .selectAll("rect")
  .data(data)
  .join("rect")
  .attr("class", "bar")
  .attr("x", (d) => x_scale(d.name))
  .attr("y", (d) => y_scale(d.amount))
  .attr("width", x_scale.bandwidth())
  .attr("height", (d) => height - y_scale(d.amount));

svg.attr("viewBox", [0, 0, width, height]);

svg.append("g").call(d3.axisBottom(x_scale)); // bottom top left right는 축의 방향만 정해줌
svg.append("g").call(d3.axisRight(y_scale));

const container = document.querySelector("#container");
container.appendChild(svg.node());
```
