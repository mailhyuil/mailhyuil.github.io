# vue.js
## install
```bash
npm init vue@latest
```
## nextTick()
> 리렌더링이 되는 지점

## defineComponent()

## Built-in Directives
### v-text
> {{}} 로 사용
```
<span>Message: {{ msg }}</span>
```
### v-html
> v-html Built-in Directives 사용
```
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```
### v-bind
> reactive한 변수에 사용 ex) props, ref, reactive
>> class에 바인딩하면 동적으로 class를 이용한 style 변경 가능
```
<div v-bind:id="dynamicId"></div>
<div :id="dynamicId"></div> <!-- shorthand -->
```
### v-show
> display style의 토글
### v-if / v-else / v-else-if
```
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```
### v-for
> forEach와 같음
```
<div v-for="item in items">
  {{ item.text }}
</div>

<div v-for="(item, index) in items"></div>
<div v-for="(value, key) in object"></div>
<div v-for="(value, name, index) in object"></div>
```
### v-on
> event listener
>> @
### v-model
> 양방향 바인딩을 가능하게 한다
>> 밑의 코드와 같다
```
<input v-model="searchText" />

// 위의 코드와 밑의 코드는 같다

<input
  :value="searchText"
  @input="searchText = $event.target.value"
/>

// 컴포넌트일 시

<CustomInput
  :modelValue="searchText"
  @update:modelValue="newValue => searchText = newValue"
/>
```
### v-slot
> #slotname
### v-pre
### v-once
### v-memo 
### v-cloak

## composables
> 재사용될 함수를 넣는 곳
>> use* 컨벤션을 사용