# nuxt props

vue 3.4부터는 구조 분해 할당과 동시에 기본값을 지정하는 방식이 권장됨

```vue
<script setup lang="ts">
interface Props {
  title?: string;
  count?: number;
}

// 구조 분해 할당과 동시에 기본값 지정 (현재 권장되는 방식)
const { title = "기본 제목", count = 0 } = defineProps<Props>();
</script>
```

## 레거시 방식

```vue
<script setup lang="ts">
withDefault(defineProps<{ title?: string; count?: number }>(), { title: "기본 제목", count: 0 });
</script>
```
