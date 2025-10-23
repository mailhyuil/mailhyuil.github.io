# typescript type extends & infer

## extends

> extends 키워드는 제네릭 타입 매개변수가 특정 타입을 확장하도록 제한하는 데 사용된다.
>
> > 특정 Type이 아닐 시 대체 타입을 지정하거나 에러를 발생시키고 싶을 때는 삼항 연산자를 사용한다.

### fn\<T extends Parent>()\{\} (확장 제한)

```ts
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Cat extends Animal {
  meow(): void {
    console.log("Meow!");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof!");
  }
}

function animalSound<T extends Animal>(animal: T): void {
  console.log(`${animal.name} makes a sound.`);
}

const cat = new Cat("Whiskers");
const dog = new Dog("Buddy");

animalSound(cat); // 출력: Whiskers makes a sound.
animalSound(dog); // 출력: Buddy makes a sound.
```

### T extends \{ [Key in Type]: Value \} (확장 제한)

> key가 없을시 에러

```ts
// 특정 타입이 아닐 시 에러
type Operations =
  | "aggregate"
  | "count"
  | "create"
  | "createMany"
  | "delete"
  | "deleteMany"
  | "findFirst"
  | "findMany"
  | "findUnique"
  | "update"
  | "updateMany"
  | "upsert";

class PrismaRepo<
  D extends { [K in Operations]: (args: unknown) => unknown },
  A extends { [K in Operations]: unknown },
  R extends { [K in Operations]: unknown },
> {
  //...
}
```

### T extends A ? A : B (삼항 연산자)

```ts
type Lecture = {
  id: number;
  title: string;
  type: "free" | "paid";
  price: number;
};

type Test<T extends "free" | "paid"> = T extends "free" ? "this is a free class" : "this is a paid class";

type LectureDescription = Test<"free">;

const description: LectureDescription = "this is a free class";
```

```ts
// 대체 타입 사용
const obj1 = {
  red: "apple",
  yellow: "banana",
  green: "cucumber",
};

type ObjType<X> = X extends typeof obj1 ? typeof obj1 : X;

const obj2 = {
  red: "apple",
  orange: "orange",
  green: "cucumber",
};

const obj1Mock: ObjType<typeof obj1> = {
  red: "apple",
  yellow: "banana",
  green: "cucumber",
};

const obj2Mock: ObjType<typeof obj2> = {
  red: "apple",
  orange: "orange",
  green: "cucumber",
};
```
