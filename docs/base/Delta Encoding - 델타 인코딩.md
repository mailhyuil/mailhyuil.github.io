# Delta Encoding - 델타 인코딩

> Delta Encoding은 데이터를 효율적으로 저장하기 위한 방법 중 하나로, 데이터의 변화량을 저장하는 방식이다. 이를 통해 데이터의 크기를 줄일 수 있으며, 데이터의 전송 시에도 효율적으로 전송할 수 있다.
>
> > 기본으로 message를 보내고, 만약 같은 부분이 존자한다면 delta이벤트로 변경된 부분만 보내는 방식

```txt
Normal Response:
"Hello World"
"Hello Next"
"Hello NestJS"
"Hello NestJS SSE!"

Delta Response:
"Hello World"
" Next"
" NestJS"
" SSE!"
```
