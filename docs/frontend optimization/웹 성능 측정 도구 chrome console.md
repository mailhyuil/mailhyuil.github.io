# 웹 성능 측정 도구 chrome console

> console 을 통해서 디버깅

```sh
Elements 탭에서 DOM 요소를 선택 => ==> $0 변수에 할당됨

Console 탭에서 $0 입력 => ==> 선택한 DOM 요소가 출력됨

# 선택한 DOM 요소를 10번 클릭
for (let i = 0; i < 10; i++) { $0.click(); }
```
