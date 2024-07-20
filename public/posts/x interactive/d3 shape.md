# d3 shape

> 데이터를 shape을 그리기 위한 데이터로 가공해준다
>
> > shape 가공을 위한 설정 -> shape 함수 반환 -> shape 함수에 data넣어서 그리기

```
d3.axisBottom()
d3.axisTop()
d3.axisLeft()
d3.axisRight()

d3.chord
d3.ribbon

d3.hierarchy()

d3.polygonArea()

d3.quadtree()

d3.scale*()

d3.path()
d3.arc()
d3.area()
d3.curve()
d3.line()
d3.link()
d3.pie()
d3.stack()
d3.symbol()
d3.areaRadial()
d3.lineRadial()
d3.linkRadial()
```

## usage

```
    const path = d3.path(); // path 생성
    path.moveTo(10, 10); // 조작
    path.arc(0, 0, 10, 0, 2 * Math.PI); // 조작
    console.log(path.toString()); // return 'd' data
```
