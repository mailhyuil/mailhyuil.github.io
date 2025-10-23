# Side Effect (부수효과 & 부작용)

> 함수 내에서 외부의 레퍼런스, 상태 등을 변경하는 것
>
> 함수의 실행이 함수 외부의 상태에 영향을 주는 행위
>
> > "무분별한 사이드 이펙트"는 코드의 유지보수를 어렵게 만들며, 코드의 예측 가능성을 떨어뜨린다.
> >
> > > side effect 분리 방법: 함수형 프로그래밍, Event
> > >
> > > Event는 Side Effect를 Trigger하는 역할로 볼 수 있다. (Event -> Effect)

## example

```ts
function payment() {
  pay();
  updateDB(); // side effect
  alert("결제가 완료되었습니다."); // side effect
  sendEmail(); // side effect
  sendSMS(); // side effect
}
```

## 함수형 프로그래밍에서의 사이드 이펙트

> 함수형 프로그래밍은 함수 내에서의 사이드 이펙트를 없애고 사이드 이펙트를 밖에서 처리하도록 유도한다.

```ts
const sideEffects = payment();
// [
//   { type: "updateDB", payload: order },
//   { type: "sendEmail", payload: order.email },
//   { type: "sendSMS", payload: order.tel },
// ];

sideEffects.forEach(event => {
  switch (event.type) {
    case "updateDB":
      updateDB(event.payload);
      break;
    case "sendEmail":
      sendEmail(event.payload);
      break;
    case "sendSMS":
      sendSMS(event.payload);
      break;
  }
});
```
