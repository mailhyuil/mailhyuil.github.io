# dart async gap

- async gap = await로 인해 “시간이 끊긴 지점”
- 이 지점 이후의 코드는 이전 컨텍스트가 더 이상 유효하지 않을 수 있습니다.

```dart

await fetch();
// 이 지점 이후의 코드는 이전 컨텍스트가 더 이상 유효하지 않을 수 있습니다.
// mounted 확인 필수
if(context.mounted) {
  context.read<SomeProvider>().someMethod();
}
```

## await를 만나면

1. 현재 함수 실행 중단
2. 이벤트 루프에 제어권 반환
3. 나중에 다시 실행

## 👉 그 “나중”에는

1. 위젯이 dispose 되었을 수도 있고
2. provider가 사라졌을 수도 있고
3. context가 무효일 수도 있음

## async gap이 발생하는 경우

```txt
await
Future.then
showDialog
Navigator.push
compute
network / db 작업
```
