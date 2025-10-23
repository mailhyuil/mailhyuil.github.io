# StreamAPI (스트림)

## 함수형 인터페이스

    - Runnable : 매개변수 x 반환값 x
    - Supplier : 매개변수 x 반환값 o
    - Consumer : 매개변수 o 반환값 x
    - Function : 매개변수 o 반환값 o
    - Predicate : 조건식 반환값 boolean

> 스트림은 내부 반복자다, 개발자가 요소 처리 코드에만 집중할 수 있게 한다 병렬처리를 지원한다 (더 빠르다) 순서가 정해져있지 않다!

> 스트림으로 병렬처리를 할 경우 내부에서 ForkJoinFramework를 사용한다 (대표 클래스 : ForkJoinPool) 기본 개념은 큰 업무를 작은 업무 단위로 쪼개고, 그것을 각기 다른 CPU 코어에서 병렬로 실행한후 결과를 취합하는 방식이다 (재귀적으로 동작, 분할정복)

## 변환

```java
//collection
Collection.stream()

//Array
Arrays.stream(new int[]{1,2,3})

//Stream static method
Stream.of(1,2,3)
```

## 메소드

- skip(3) : 처음 3개를 건너뜀
- limit(5) : 스트림의 요소를 5개로 제한
- filter(Predicate predicate) : 조건 제거
- distinct() : 중복제거
- sorted() or sorted(Comparator.\*): 정렬
- map : 각 요소를 순회
- flatMap() : 배열을 제거
- reduce(BinaryOperator) = reduce(초기값, (누적값, 요소)→{…}) : 요소를 하나씩 줄여가며 연산
- mapToInt(), mapToLong(), mapToDouble() : 변환 (처음부터 IntStream을 사용하길 권장)

---

- peek(Consumer consumer) : 파이프의 중간 중간에 끼어넣어 조회
- forEach(Consumer consumer) : 요소 순회
- allMatch(Predicate predicate) : 전부 조건 검사해서 맞는지 확인
- anyMatch(Predicate predicate) : 하나라도 조건 검사에 맞는지 확인
- noneMatch(Predicate predicate) : 전부 조건 검사해서 틀린지 확인
- findFirst : 첫번째 요소를 찾음 (filter와 함께 사용)
- findAny : 아무거나 가장 먼저오는 요소를 찾음 (병렬처리와 함께 사용)
- count(), sum(), average(), max(), min() : 집계함수

---

- collect(Collectors.\*)
- Collectors.\*
  - toList(), toSet(), toCollection(), toArray() : 컬렉션으로 변환 (toCollections(ArrayList:new)
  - toMap(p→p.getId(), p→p) : 맵은 키와 값으로 저장하므로 키와 값을 지정해줘야한다.
  - counting(), summingInt(), averagingInt(), maxBy(), minBy()
  - reducing()
  - joining()
  - groupBy()
  - partitioningBy()
  - comparingInt()
  - collectingAndThen(?, Optional::get)
  - mapping

```java
//partitioningBy()
Map<Boolean, List<Integer>> map = Stream.of(1,2,3,4)
        .collect(partitioningBy((i)->{
            return i % 2 == 0;
        }));

//groupBy()

```
