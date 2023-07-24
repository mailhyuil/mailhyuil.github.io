# nest Reflector

> The Reflector class provides two utility methods used to help with this.

## reflector.get()

> 주어진 컨텍스트에서 주어진 키에 대한 메타데이터를 검색합니다.

## reflector.getAllAndOverride()

> > metadata 가져오기

## reflector.getAllAndMerge()

```ts
//  현재 요청에 대한 핸들러 메서드를 반환 // 메소드에 데코레이터를 달아놨을 때 사용
const roles = this.reflector.get<string[]>("roles", context.getHandler());

// 현재 요청에 대한 클래스 (컨트롤러)를 반환 // 클래스에 데코레이터를 달아놨을 때 사용
const roles = this.reflector.get<string[]>("roles", context.getClass());

//context.getHandler()와 context.getClass() 모두에 대해 'roles' 메타데이터를 검색하고 병합 // 메소드 클래스 둘다에 데코레이터를 달 수 있게 하기
const roles = this.reflector.getAllAndOverride<string[]>("roles", [context.getHandler(), context.getClass()]);
```
