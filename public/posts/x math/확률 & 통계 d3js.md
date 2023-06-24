# d3js

> data visualization library

## install

```
npm i d3
```

## 사용

```html
<!DOCTYPE html>
<html>
  <head>
    <title>D3.js Spring Animated Bar Chart with Axis Example</title>
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <style>
      .bar {
        fill: steelblue;
      }

      .axis-text {
        font-size: 12px;
      }
    </style>
  </head>
  <body>
    <svg id="chart"></svg>

    <script>
      // 데이터
      const data = [
        { name: "A", value: 10 },
        { name: "B", value: 20 },
        { name: "C", value: 15 },
        { name: "D", value: 25 },
        { name: "E", value: 12 },
      ];

      // 차트 크기
      const margin = { top: 20, right: 20, bottom: 30, left: 40 };
      const width = 400 - margin.left - margin.right;
      const height = 300 - margin.top - margin.bottom;

      // x축 스케일
      const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d.name))
        .range([0, width])
        .padding(0.1);

      // y축 스케일
      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.value)])
        .range([height, 0]);

      // 차트 그리기
      const svg = d3
        .select("#chart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

      const bars = svg
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d) => xScale(d.name))
        .attr("y", height)
        .attr("width", xScale.bandwidth())
        .attr("height", 0);

      // 초기 애니메이션 효과
      bars
        .transition()
        .duration(1000)
        .attr("y", (d) => yScale(d.value))
        .attr("height", (d) => height - yScale(d.value))
        .ease(d3.easeElasticOut.amplitude(1).period(0.5));

      // x축 그리기
      const xAxis = d3.axisBottom(xScale);
      svg.append("g").attr("transform", `translate(0, ${height})`).call(xAxis).selectAll(".tick text").attr("class", "axis-text");

      // y축 그리기
      const yAxis = d3.axisLeft(yScale);
      svg.append("g").call(yAxis).selectAll(".tick text").attr("class", "axis-text");
    </script>
  </body>
</html>
```
