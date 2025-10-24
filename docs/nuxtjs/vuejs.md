# vuejs

## install

```bash
npm init vue@latest
```

## nextTick()

> 리렌더링이 되는 지점

## defineComponent()

## Built-in Directives

### v-text

> `{{}}` 로 사용

```html
<span>Message: {{ msg }}</span>
```

### v-html

> v-html Built-in Directives 사용

```html
<p>
  Using v-html directive:
  <span v-html="rawHtml"></span>
</p>
```

### v-bind

> reactive한 변수에 사용 (e.g. props, ref, reactive)
>
> > class에 바인딩하면 동적으로 class를 이용한 style 변경 가능

```html
<div v-bind:id="dynamicId"></div>
<div :id="dynamicId"></div>
<!-- shorthand -->
```

### v-show

> display style의 토글

### v-if / v-else / v-else-if

```html
<div v-if="type === 'A'">A</div>
<div v-else-if="type === 'B'">B</div>
<div v-else-if="type === 'C'">C</div>
<div v-else>Not A/B/C</div>
```

### v-for

> forEach와 같음

```html
<div v-for="item in items">{{ item.text }}</div>

<div v-for="(item, index) in items"></div>
<div v-for="(value, key) in object"></div>
<div v-for="(value, name, index) in object"></div>
```

> v-for 안에서 map도 사용 가능

```txt
v-for="(hey, index) of heys.map((hey) => `${hey}!!`)"
```

### v-on

> event listener
>
> > @

#### @click.self

> target만 click 이벤트를 받는다

```html
<div @click.self="">
  <- 이 요소만 click 이벤트
  <div></div>
  <- 이 요소는 click 이벤트 받지 않음
</div>
```

### v-model

> 양방향 바인딩을 가능하게 한다
>
> > 밑의 코드와 같다
> >
> > > v-model을 사용시 update:v-model emit을 사용하면 바로 값이 바뀐다!
> > >
> > > > v-model:변수명="값"으로 변수명 설정 가능
> > > >
> > > > > 변수명 설정하지 않으면 modelValue로 받을 수 있다.
> > > > >
> > > > > > update:modelValue 혹은 update:변수명 emits으로 업데이트 할 수 있다.

```html
<input v-model="searchText" />

// 위의 코드와 밑의 코드는 같다

<input :value="searchText" @input="searchText = $event.target.value" />

// 컴포넌트일 시

<CustomInput :modelValue="searchText" @update:modelValue="newValue => searchText = newValue" />
```

```ts
const props = defineProps<{
  modelValue: string;
}>();
const emits = defineEmits(["update:modelValue"]);
emits("update:modelValue", "안녕"); // 따옴표 모양이 같아야한다 "" 안됨
```

```txt
v-model="" === modelValue
update:modelValue

v-model:title === title
update:title
```

### v-slot

> 컴포넌트 재사용할 때 유용한 기능!
>
> > slot이 두개일 땐 네임을 붙이고 템플릿으로 가져오기
> >
> > > #slotname

#### Name.vue

```html
<template>
  <button class="p-2 bg-red-500">
    <slot />
  </button>
  <button class="p-2 bg-blue-500">
    <slot name="slotName" />
  </button>
</template>
```

#### other.vue

```html
<Name>
  <template>
    // "이름이 없는
    <slot />
    으로 들어갑니다."
  </template>
  <template #slotName>
    // "
    <slot name="slotName" />
    으로 들어갑니다."
  </template>
</Name>
```

### v-pre

### v-once

### v-memo

### v-cloak

## composables

> 재사용될 함수를 넣는 곳
>
> > use\* 컨벤션을 사용
