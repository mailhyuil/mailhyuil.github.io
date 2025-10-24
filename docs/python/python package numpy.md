# python package numpy

> 과학적 계산을 빠르게 해주는 라이브러리

## install

```sh
pip install numpy
```

## ndarray

> numpy의 배열

```py
np.array(collection)
np.array(collection, dtype = np.float64)
```

## .dtype

> ndarray의 타입을 반환

## .shape

> 행렬을 반환 (4, 1)

## zeros, eye,

### zeros

> 전부 0 인 배열 반환

### eye

> 대각행렬 반환

### empty

> zeros와 비슷하지만 다차원 배열의 값을 한번에 바꿀 수 있음

```py
a = np.empty((3,5))
```
