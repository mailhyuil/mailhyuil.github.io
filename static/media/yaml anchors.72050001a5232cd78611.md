# yaml anchors

```yaml
base: &base # 공통으로 사용할 값
  name: Everyone has same name

foo: &foo
  <<: *base # << *base 를 사용해서 base의 값을 참조해서 삽입
  age: 10

bar: &bar
  <<: *base
  age: 20
```
