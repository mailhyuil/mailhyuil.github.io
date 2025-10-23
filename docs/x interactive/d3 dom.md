# d3 dom

> selection을 통해서 조작 가능

```js
d3.select("div").style("background-color", "blue").style("color", "red");
d3.selectAll("div").style("background-color", "blue").style("color", "red");

let fruits = ["Apple", "Orange", "Mango"];

d3.selectAll("h1") // h1 태그 선택
  .data(fruits) // 데이터 바인딩
  .text((data) => data); // textContent로 집어넣는 것과 같음

d3.select("h1") // h1 선택
  .data(fruits) // data 바인딩
  .join("p") // join() 데이터에 맞춰서 p 요소 생성
  .attr("class", "d3_fruit") // 위의 태그 모두에게 class 속성 추가
  .text((data) => data); // textContent로 추가

// selectAll과 join을 함께쓰면 enter(), exit(), update()를 사용할 필요가 없다
// selectAll과 join을 함께쓰면 데이터의 수 만큼 요소가 생성되고, 데이터의 수가 줄어들면 요소도 줄어든다
d3.select("#container") // container를 선택
  .selectAll("p") // container의 모든 p를 선택
  .data(data)
  // .enter() // data가 더 많으면 enter()로 추가
  // .append("p") // p 요소 추가
  // .join()으로 대체 가능
  .join()
  .text((d) => d.name);

// svg 생성하여 attribute 설정
d3.create("svg").attr("width", width).attr("height", height);

svg.append("g").call(d3.axisBottom(x));
```
