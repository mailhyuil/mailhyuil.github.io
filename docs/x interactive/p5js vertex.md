# p5js vertex

> beginShape()로 vertex를 순서대로 연결하고
>
> > endShape()로 도형을 닫아서 도형을 완성한다.

## vertex() & beginShape() & endShape()

```
beginShape();
vertex(30, 20);
vertex(85, 20);
vertex(85, 75);
vertex(30, 75);
endShape(CLOSE);
```

### beginShape()

```
LINES - 여려 개의 분리 된 선들을 그립니다.

TRIANGLES - 여러 개의 분리 된 삼각형들을 그립니다.

TRIANGLE_FAN - 여러 개의 연결 된 삼각형들을 그립니다. 이 삼각형들은 첫 꼭짓점을 공통적으로 하며 부채 모양으로 그려집니다.

TRIANGLE_STRIP - 여러 개의 연결 된 삼각형들을 그립니다. 이 삼각형들은 한 줄로 그려집니다.

QUADS - 여러 개의 분리 된 사각형들을 그립니다.

QUAD_STRIP - 여러 개의 연결 된 사각형들을 한 줄로 그립니다.

TESS (WebGl만 가능) - 모자이크 세공 (tessellation)을 위한 불규칙적 도형을 그립니다.
```

### endShape()

```
endShape()
endShape(CLOSE) // 도형을 닫기
```

## 다른 vertex들

### bezierVertex()

### curveVertex()

### quadraticVertex()
