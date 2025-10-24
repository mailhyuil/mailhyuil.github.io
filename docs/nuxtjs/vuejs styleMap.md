# vuejs styleMap

```
const styleMap = ref<{[key:string]:string}>({
    none:'',
    primary:'text-primary'
    secondary:'text-secondary'
    // and so on..
})

const selectedStyle = computed(()=> props.type in styles ? styleMap[props.type] : styles.none)
```
