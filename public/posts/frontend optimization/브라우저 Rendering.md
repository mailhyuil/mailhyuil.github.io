# Rendering

> 브라우저 렌더링 과정
>
> DOM TREE -> CSSOM TREE -> RENDER TREE -> LAYOUT(REFLOW) -> PAINT -> COMPOSITE
>
> > Layout : 레이아웃을 계산하는 것
> >
> > > Paint : 레이아웃을 그리는 것
> > >
> > > > Reflow → Repaint → Composite순으로 렌더링에 대한 비용이 낮다.
> > > >
> > > > Reflow가 일어나면 다음 단계인 Repaint도 같이 발생한다.

## Reflow

> 밑의 css 속성을 변경하면 레이아웃이 다시 계산된다.

```txt
position
width
height
left
right
top
bottom
margin
padding
border
display
float
font-size
font-weight
line-height
overflow
```

## Repaint

> 밑의 css 속성을 변경하면 레이아웃이 다시 그려진다.

```txt
background
background-image
background-size
border-radius
border-size
color
line-style
outline
outline-color
outline-style
outline-width
text-decoration
```

## Reflow, Repaint 를 생략하는 방법 (GPU 가속)

> 밑의 css 속성을 변경하면 reflow, repaint가 발생하지 않는다.
>
> > composite-only properties : opacity, transform
> >
> > > GPU를 사용하여 레이아웃을 계산하고 그리는 것
> > >
> > > > 항상 GPU를 사용하는 것은 아니다. (GPU를 사용할 수 없는 경우도 있다.)
> > > >
> > > > will-change 를 사용해서 브라우저에게 GPU를 사용할 것을 알려줄 수 있다.
> > > >
> > > > will-change의 사용이 끝날시에는 다시 auto로 초기화 해줘야 한다.

```txt
transform
opacity

transform: translateZ(0); // 옛날 방식 (3D 처리를 하도록 브라우저를 속여서 강제로 하드웨어를 가속화 하는 방법을 사용했다.)
will-change: transform; // 최신 방식
```

```js
function hintBrowser() {
  // The optimizable properties that are going to change
  // in the animation's keyframes block
  this.style.willChange = "transform, opacity";
}

function removeHint() {
  this.style.willChange = "auto";
}
```
