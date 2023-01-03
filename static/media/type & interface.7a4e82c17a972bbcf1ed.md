# type & interface

> TypeScript 팀은 개방-폐쇄 원칙에 따라 확장에 열려있는 JavaScript 객체의 동작 방식과 비슷하게 연결하도록 Interface를 설계했습니다.
>
> > 그래서 TypeScript 팀은 가능한 Type Alias보단 Interface를 사용하고, 합 타입 혹은 튜플 타입을 반드시 써야 되는 상황이면 Type Alias를 사용하도록 권장하고 있습니다.

## 선언 병합

> Interface는 선언 병합이 가능하지만, Type Alias는 그렇지 않습니다.

```
interface Window {
  title: string;
}

interface Window {
  ts: import("typescript");
}

declare function getWindow(): Window;

const window = getWindow();
const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});    // transpileModule() 메서드 사용 가능
```

## 확장하는 법

### interface

```
interface PeopleInterface {
  name: string
  age: number
}

interface StudentInterface extends PeopleInterface {
  school: string
}
```

### type

```
type PeopleType = {
  name: string
  age: number
}

type StudentType = PeopleType & {
  school: string
}
```

### computed value의 사용

> type만 가능

```
type names = 'firstName' | 'lastName'

type NameTypes = {
  [key in names]: string
}

const yc: NameTypes = { firstName: 'hi', lastName: 'yc' }
```

## 인터페이스나 타입으로 미리 만들기

```
interface Movie {
  id: number;
  title: string;
  medium_cover_image: string;
}
```

## 제네릭 안에서 선언

```
<{
  id: number;
  title: string;
  medium_cover_image: string;
}>

 // or

<{
  "@meta": any;
  data: {
    limit: number;
    movie_count: number;
    movies: Movie[];
    page_number: 1;
  };
}>
```
