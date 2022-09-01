# 스트림(Stream)
> 스트림은 내부 반복자다, 개발자가 요소 처리 코드에만 집중할 수 있게 한다
> 병렬처리를 지원한다 (더 빠르다) 순서가 정해져있지 않다!

- 변환
```
//collection
Collection.stream()

//Array
Arrays.stream(new int[]{1,2,3})

//Stream static method
Stream.of(1,2,3)
```

- skip, limit
- filter, distinct
- sorted
- map
- peek

- forEach
- allMatch, anyMatch, noneMatch, findFirst, findAny
- count, sum, average, max, min

- collect(Collectors.*)
```
//partitioningBy()
Map<Boolean, List<Integer>> map = Stream.of(1,2,3,4)
        .collect(partitioningBy((i)->{
            return i % 2 == 0;
        }));

//groupBy()

```