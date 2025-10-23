# profiling memory leak

## Detached Elements를 찾아라

> Detached Element : DOM Tree 로부터 분리된 Element
>
> > Detached Element가 많다면 Element가 어딘가에 참조되고 있어서 GC가 수거를 못한거다.
> >
> > DOM Node는 DOM Tree에서 삭제되었지만 DOM Node를 참조하는 객체가 있다면 memory leak이 발생한다.

## Object, Array를 참조하는 Element를 찾아라

> Object, Array는 다른 값들을 참조할 수 있고 참조가 끊어지지 않는 한 메모리에서 해제되지 않는다.

## 자기자신을 참조하는 Element를 찾아라

> 자기자신을 참조하는 Element는 GC가 수거하지 못한다.

## closure를 남용하지 말아라

> closure에서 바깥 스코프의 변수를 참조하면 GC가 수거하지 못한다.
