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
comment_line_break: |
  Hello my name is wook.
  Im developer.

comment_single_line: >
  Hello world
  my first yml syntax.

# Null
null: ~
null_2: Null

# Bollean
A: True
B: False

# Variable
my_value: &my_value value1 # 변수 선언

var: *my_value # 변수 사용

env: $MY_ENV # 환경 변수 사용
... # 문서의 끝
```
