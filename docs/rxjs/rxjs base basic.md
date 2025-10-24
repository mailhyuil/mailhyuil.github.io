# rxjs base basic

> 파일 읽기, HTTP 호출, 키 입력 또는 마우스 움직임 등 이벤트의 소스를 처리하는 단일 프로그래밍을 사용
>
> > 콜백 또는 Promise 기반 라이브러리를 대체
> >
> > > 콜백은 각 마우스 이벤트를 독립적으로 처리하지만 rxjs는 모든 이벤트를 결합하여 처리

## 데이터 스트림

> 일반 function은 한번만 return이 가능
>
> > Observable은 generator와 같이 next를 이용해서 여러번 값을 방출 가능하다.

## usage

```ts
/* Producer */
const observable = of(1, 2, 3); // like this.httpService.get('api_path')
/* Consumer */
const observer = (data) => console.log(data);

const subscription = observable.subscribe(observer); // 구독을 관리하는 주체
```

## 용어

> mirroring : 옵저버블에서 발생하는 이벤트들을 다른 옵저버블에도 동일하게 전달하는 것
>
> > subscribe : 이벤트를 구독하는 동작
> >
> > > notifier : 상태 변화를 알리는 역할
> > >
> > > > emit : 새로운 값을 발생시키다 next같은 이벤트를 사용
> > > >
> > > > > project : 값들을 다른 형태로 변환하는 동작
