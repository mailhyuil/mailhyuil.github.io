# vue v-for

## forEach와 같음

```html
<div v-for="item in items">{{ item.text }}</div>

<div v-for="(item, index) in items"></div>
<div v-for="(value, key) in object"></div>
<div v-for="(value, name, index) in object"></div>
```

## v-for 안에서 map도 사용 가능

```vue
<div v-for="(hey, index) of heys.map(hey => `${hey}!!`)"></div>
```
