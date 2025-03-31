# yaml

```yaml
--- # 문서의 시작
# my test yaml syntax

name: baek
job: developer

list_1:
  - apple
  - banana
  - orange
list_2: [apple, banana, orange]

object_1:
  time: "12:34:11"
  date: "2019-04-30"
object_2: { time: "12:34:11", date: "2019-04-30" }

object_list:
  - color: red
    direction: left
  - color: blue
    direction: right

# String
# 줄바꿈 유지
comment_line_break: |
  Hello my name is wook.
  Im developer.
# 줄바꿈을 공백으로 대체 (한줄)
comment_single_line: >
  Hello world
  my first yml syntax.

# Null
val: ~
val: null
val: Null
val:

# Bollean
val: True
val: true
val: False
val: false

# Variable
my_value: &my_value value1 # 변수 선언
val: *my_value # 변수 사용

my_list: &my_list # 리스트 변수 선언
  - value1
  - value2
val:
  <<: *my_list # 리스트 변수 사용
... # 문서의 끝
```
