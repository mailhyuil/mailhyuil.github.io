# nuxt image upload

1. FormData 객체에 append
2. FormData를 body에 담아서 POST
3. return된 url을 DB에 저장

```js
watch(files, async (value) => {
  if (value) {
    const _files = Array.from(value);

    for (const file of _files) {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("https://image.lepisode.team/api/upload.php", {
        method: "POST",
        body: formData,
      });
      const { url } = await res.json();

      emits("update:modelValue", [...props.modelValue, url]);
    }
  }
});
```
