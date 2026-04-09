# vue v-memo

조건 기반 렌더링 캐싱 (Vue 3 전용)
특정 값이 바뀔 때만 다시 렌더링

## usage

id 안 바뀌면 렌더 스킵

```vue
<div v-memo="[id]">
  {{ heavyCalculation }}
</div>
```
