# algorithm Detection 감지

> 프록시 : 실시간 감지 / 동기적 감지
>
> > 이벤트 : 다수에게 감지를 알리기 / 비동기적 감지
> >
> > > 변화감지, 지연감지, 에러감지, 이벤트 감지, 상태 감지, 경계 감지 Boundary

```js
// 변화 감지 대상 객체
const targetObject = {
  property1: "value1",
  property2: "value2",
};

// 변화 감지 함수
function detectChanges(obj, callback) {
  return new Proxy(obj, {
    // target: 실제 오브젝트
    // property: 전달받은 프로퍼티
    // value: 전달받은 값
    set(target, property, value) {
      const oldValue = target[property];

      target[property] = value;

      if (oldValue !== value) {
        callback(property, value, oldValue);
      }

      return true;
    },
  });
}

// 변화 감지 콜백 함수
function handleChange(property, newValue, oldValue) {
  console.log(`Property '${property}' changed from '${oldValue}' to '${newValue}'`);
}

// 변화 감지 대상 객체에 변화 감지 기능 추가
const proxy = detectChanges(targetObject, handleChange);

// 테스트: 속성 값 변경
proxy.property1 = "new value";
```

- 지연감지
- 에러감지
- 이벤트 감지
- 상태 감지
- 경계 감지 Boundary
