# vue.js
## install
```bash
npm init vue@latest
```
## nextTick()
## defineComponent()

## OptionAPI VS CompositionAPI
### OptionAPI
```vue
<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```
### CompositionAPI
```vue
<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

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
```
<div v-bind:id="dynamicId"></div>
<div :id="dynamicId"></div> <!-- shorthand -->
```
### v-show
> display style의 토글
### v-if / v-else
```
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
```
### v-else-if
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
>> short hand @
### v-model
> two-way binding on a form input
### v-slot
### v-pre
### v-once
### v-memo 
### v-cloak