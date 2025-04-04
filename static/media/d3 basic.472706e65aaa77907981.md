# d3 basic

```js
// 1. data 준비
const data = [1, 2, 3, 4, 1];

// 2. svg 생성
const svg = d3.create("svg").attr("width", 500).attr("height", 500);

// 3. x 길이 생성
const x = d3
  .scaleBand()
  .domain(data.map((_, i) => i + ""))
  .range([0, 500]);

// 4. rect로 막대 그리고 bandwith만큼 옆으로 띄우기
svg
  .selectAll("rect")
  .data(data)
  .join("rect")
  .attr("width", x.bandwidth())
  .attr("height", (d) => d * 100)
  .attr("x", (_, i) => x.bandwidth() * i); // bandwidth만큼 띄워서 그림
//.attr("y", (d) => 500 - d * 100); // 막대 반대로 그리기

// 5. 언더바 그리기
svg
  .selectAll(".underbar")
  .data(data)
  .enter() // 들어오는 데이터만큼 반복
  .append("rect")
  .attr("class", "underbar")
  .attr("width", x.bandwidth())
  .attr("height", 10)
  .attr("x", (_, i) => x.bandwidth() * i) // bandwidth만큼 띄워서 그림
  .attr("y", (d) => 498);

// 6. x 길이에 맞춰서 axis 그리기
svg.append("g").attr("transform", `translate(0, ${500})`).call(d3.axisTop(x));
```
