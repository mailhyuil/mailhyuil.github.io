# GPU 가속

## GPU 가속의 조건

> object가 composite layer에 있어야 한다.
>
> > reflow, repaint가 발생하지 않는 composite only property를 사용해야 한다.
> > reflow와 repaint는 cpu에서 수행되기 때문

## composite layer로 만드는 방법

```txt
3D 변형: translate3d, translateZ 등등
will-change;

Element.animate();를 사용해 구현한 transform과 opacity 애니메이션
CSS 트랜지션과 애니메이션을 사용해 구현한 transform과 opacity 애니메이션

position: fixed;

filter;
<video>, <canvas>, <iframe> 요소
...
```

## transform & opacity

> 이 두 속성은 reflow, repaint가 발생하지 않는다.
>
> > 따라서 GPU 가속을 사용할 수 있다.
> >
> > > transform과 opacity를 조정해서 다른 속성을 대체하는 trick을 사용할 수 있다.
> > > (e.g. width, height를 transform: scale로 대체)

### trick example

> 뒤에 blue 색을 넣어놓고 red의 opacity를 0으로 바꾸기

```html
<div id="bg-change"></div>
<style>
  #bg-change {
    width: 100px;
    height: 100px;
    background: red;
  }

  #bg-change::before {
    background: blue;
    opacity: 0;
    transition: opacity 0.4s;
  }

  #bg-change:hover::before {
    opacity: 1;
  }
</style>
```
