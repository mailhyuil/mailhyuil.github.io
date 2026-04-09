# vue v-bind style

```html
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

## styleMap 만들기

```ts
const styleMap = ref<{[key:string]:string}>({
    none:'',
    primary:'text-primary'
    secondary:'text-secondary'
    // and so on..
})

const selectedStyle = computed(()=> props.type in styles ? styleMap[props.type] : styles.none)
```
