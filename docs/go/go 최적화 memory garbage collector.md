# go 최적화 memory garbage collector

> Heap 메모리에서 사용하지 않는 객체를 제거하는 과정

## Mark and Sweep

```md
1. root object와 연결된 object를 찾는다.
2. 사용중인 object를 mark한다.
3. mark되지 않은 object를 sweep한다.
```

## Tricolor Mark and Sweep

> golang에서 사용되는 방식
>
> > 3가지 색(White, Gray, Black)으로 객체를 구분하여 GC 효율을 높임
> >
> > > White 아직 탐색되지 않은 객체 (삭제 후보)
> > >
> > > Gray 현재 탐색 중인 객체 (자식 객체 탐색 진행 중)
> > >
> > > Black 탐색이 완료된 객체 (삭제되지 않음)

```md
1. root object와 연결된 object를 찾는다.
2. 참조 가능한 객체는 gray로 표시한다.
3. gray 객체를 탐색하면서 참조 가능한 객체를 gray로 표시한다.
4. 탐색이 완료된 객체는 black으로 표시한다.
5. white 객체를 sweep한다.
```
