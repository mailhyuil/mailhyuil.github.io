# python 함수

## 일반함수

```py
def hi(x):
    return x
```

## 익명함수

```py
hi = lambda x:x+1
```

## enumerate(list)

> index, 값을 반환

## \* \*\*

### \*var

> 여러 인자를 튜플로 받음

### \*\*var

> 여러 인자를 딕셔너리로 받음

### 익명함수용 메소드

```py
zip(list1, list2) // 두개의 리스트를 인덱스가 같은 것끼리 묶어서 반환
map(func, collection)
filter(func, collection)
```

## global nolocal

> global 전역 변수에 접근
>
> > nolocal 바깥쪽에 있는 스코프에 있는 변수에 접근
