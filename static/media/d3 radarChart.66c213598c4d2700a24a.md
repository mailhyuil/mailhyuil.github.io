# d3 radarChart

```html
<html>
  <script src="https://d3js.org/d3.v7.min.js"></script>
  <body></body>
  <script>
    let data = [
      { A: 1, B: 4, C: 2, D: 3, E: 6, F: 2 },
      { A: 2, B: 3, C: 4, D: 1, E: 4, F: 4 },
      { A: 3, B: 2, C: 4, D: 2, E: 2, F: 3 },
    ];

    let features = ["A", "B", "C", "D", "E", "F"];

    let width = 600;
    let height = 600;
    let svg = d3.select("body").append("svg").attr("width", width).attr("height", height);
    let radialScale = d3.scaleLinear().domain([0, 10]).range([0, 250]);
    let ticks = [2, 4, 6, 8, 10];

    svg
      .selectAll("circle")
      .data(ticks)
      .join((enter) =>
        enter
          .append("circle")
          .attr("cx", width / 2)
          .attr("cy", height / 2)
          .attr("fill", "none")
          .attr("stroke", "gray")
          .attr("r", (d) => radialScale(d))
      );

    svg
      .selectAll(".ticklabel")
      .data(ticks)
      .join((enter) =>
        enter
          .append("text")
          .attr("class", "ticklabel")
          .attr("x", width / 2 + 5)
          .attr("y", (d) => height / 2 - radialScale(d))
          .text((d) => d.toString())
      );

    function angleToCoordinate(angle, value) {
      let x = Math.cos(angle) * radialScale(value);
      let y = Math.sin(angle) * radialScale(value);
      return { x: width / 2 + x, y: height / 2 - y };
    }

    let featureData = features.map((f, i) => {
      let angle = Math.PI / 2 + (2 * Math.PI * i) / features.length;
      return {
        name: f,
        angle: angle,
        line_coord: angleToCoordinate(angle, 10),
        label_coord: angleToCoordinate(angle, 10.5),
      };
    });

    // draw axis line
    svg
      .selectAll("line")
      .data(featureData)
      .join((enter) =>
        enter
          .append("line")
          .attr("x1", width / 2)
          .attr("y1", height / 2)
          .attr("x2", (d) => d.line_coord.x)
          .attr("y2", (d) => d.line_coord.y)
          .attr("stroke", "black")
      );

    // draw axis label
    svg
      .selectAll(".axislabel")
      .data(featureData)
      .join((enter) =>
        enter
          .append("text")
          .attr("x", (d) => d.label_coord.x)
          .attr("y", (d) => d.label_coord.y)
          .text((d) => d.name)
      );

    let line = d3
      .line()
      .x((d) => d.x)
      .y((d) => d.y);

    let colors = ["darkorange", "gray", "navy"];

    function getPathCoordinates(data_point) {
      let coordinates = [];
      for (let i = 0; i < features.length; i++) {
        let ft_name = features[i];
        let angle = Math.PI / 2 + (2 * Math.PI * i) / features.length;
        coordinates.push(angleToCoordinate(angle, data_point[ft_name]));
      }
      return coordinates;
    } // draw the path element

    svg
      .selectAll("path")
      .data(data)
      .join((enter) =>
        enter
          .append("path")
          .datum((d) => getPathCoordinates(d))
          .attr("d", line)
          .attr("stroke-width", 3)
          .attr("stroke", (_, i) => colors[i])
          .attr("fill", (_, i) => colors[i])
          .attr("stroke-opacity", 1)
          .attr("opacity", 0.5)
      );
  </script>
</html>
```
