# angular ngFor

```html
<li *ngFor="let item of items; index as i; trackBy: trackByFn">...</li>
```

## index

> index as i

## count

> count as c

## first

> first as f

## last

> last as l

## even

> even as e

## odd

> odd as o

## trackBy

> 추적할 대상을 리턴하는 함수를 미리 작성
>
> > 오직 해당하는 DOM만 refresh 됩니다.

```
trackByItem = (index: number, item: any): number => item.id;
```

## 요소 반복시키기

```
*ngFor="let i of [].constructor(5)"
```
