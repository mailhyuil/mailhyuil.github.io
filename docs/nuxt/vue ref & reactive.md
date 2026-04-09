# vue ref & reactive

## ref

- 원시값, 객체 전부 사용 가능
- .value로 접근해야한다
- 값이 전체 바뀌어도 반응성이 유지됨

## reactive

- proxy 패턴으로 구현됨
- 객체값이 전체 교체되면 반응성이 유지되지 않음
