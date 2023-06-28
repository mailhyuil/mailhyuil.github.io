# 재귀 구조

> 탈출조건에 다가가기 위한 연산
>
> > 탈출조건에서 풀려놨을 때 수행할 연산
> >
> > > 두연산은 내부 재귀함수 호출 전과 후로 나뉜다.
> > >
> > > > 최소 값만 가지고 있다면 정말 쉽게 답을 구할 수 있는가???

```js
const data = 'hello';

recursive(_data: string): string {
  if (_data.length < 1) return '';
  return this.recursive(_data.substring(1)) + _data.charAt(0);
}

console.log(recursive(data));
```
