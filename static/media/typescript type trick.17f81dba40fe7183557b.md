# typescript type trick

## 받은 프로퍼티에 따라 타입을 다르게 하고 싶을 때

```ts
type DogProps = {
  type: "dog";
  isLeashed: boolean;
  bark: () => void;
};
type CatProps = {
  type: "cat";
  insideCarrierBox: boolean;
  meow: () => void;
};

type Animal = {
  name: string;
} & (DogProps | CatProps);

const dog: Animal = {
  name: "sonny",
  type: "dog",
  isLeashed: true,
  bark: () => console.log("bark"),
};

const cat: Animal = {
  name: "hyuil",
  type: "cat",
  insideCarrierBox: true,
  meow: () => console.log("meow"),
};

function makeSound(animal: Animal) {
  if (animal.type === "dog") {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound(dog);
makeSound(cat);
```
