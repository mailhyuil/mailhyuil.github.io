# vue lifecycle hook

## setup

컴포넌트의 시작점
상태, 로직을 정의하는 곳

```vue
<script lang="ts" setup></script>
```

## onMounted

DOM 생성 완료 후 실행

```ts
onMounted(() => {
  console.log("DOM ready");
});
```

## onBeforeUnmount

삭제 직전

## onUnmounted

컴포넌트 사라진 후

```ts
onUnmounted(() => {
  clearInterval(timer);
});
```

## onActivated / onDeactivated

`<keep-alive>`로 감싸진 컴포넌트가 활성화/비활성화 될 때 호출되는 훅

## onErrorCaptured

현재 컴포넌트에서 에러가 발생했을 때 호출되는 훅
