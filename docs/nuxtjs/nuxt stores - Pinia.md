# nuxt stores - Pinia

> state를 전역으로 관리할 수 있다.
>
> > 새로고침시 데이터는 사라진다.
> >
> > > pinia-plugin-persistedstate 패키지를 사용해서 localStorage를 사용해 새로고침 시 상태유지를 시킬 수 있다.
> > >
> > > > stores 폴더 안에 생성

## install

```
yarn add @pinia/nuxt
```

## nuxt.config.ts

```
modules: ['@pinia/nuxt']
```

## format

> /stores/useRoomStore.ts

```ts
export const useRoomStore = defineStore(
  "room",
  () => {
    const room = ref<ITenantMoveRoomDTO[]>([]);

    const setRoom = (fetchedRoom: ITenantMoveRoomDTO[]) => {
      room.value = fetchedRoom;
    };

    const getRoom = () => {
      return room.value;
    };
    return { getRoom, setRoom };
  },
  {}
);
```

```ts
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("Eduardo");
  const doubleCount = computed(() => count.value * 2); // 연산된 후의 객체를 반환함
  function increment() {
    // 함수를 반환 counterStore.increment()라고 해야함
    count.value++;
  }

  return { count, name, doubleCount, increment };
});
```

## @pinia-plugin-persistedstate/nuxt

> state를 localStorage에 넣어서 새로고침시 값을 유지 시켜주는 플러그인

```
yarn add -D @pinia-plugin-persistedstate/nuxt
```

[@pinia-plugin-persistedstate/nuxt](https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html)
