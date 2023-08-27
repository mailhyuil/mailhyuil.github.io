# FormData

> form을 쉽게 보내도록 도와주는 객체
>
> > html form 데이터
> >
> > > FormData.append('name', value) 를 사용해서 간단하게 인풋값을 넣은 폼데이터를 전송

```js
formData.append(name, value);
formData.set(name, value); // 동일한 이름이 있을 시 삭제하고 저장 (덮어쓴다)
formData.append(name, blob, value);
formData.set(name, blob, value);
formData.delete(name);
formData.get(name);
formData.has(name);
```

## form 태그의 값을 가져오기

```js
formElement.onsubmit = async (e) => {
  e.preventDefault();

  let response = await fetch("/article/formdata/post/user", {
    method: "POST",
    body: new FormData(formElement),
  });

  let result = await response.json();

  alert(result.message);
};
```

## formData로 파일 데이터 보내기

> object는 자동으로 casting해버린다 -> [Object object]
>
> > stringify 해서 서버에 보내기
> >
> > > 서버에서 parse

```
const submit = handleSubmit(async (body) => {
    formData.append('title', body.title);
    formData.append('content', body.content);
    formData.append('category', body.category);
    await useApi<ICreateWebPostDTO>('/web-post', {
        method: 'POST',
        body: formData,
    });
    navigateTo('/home-page/post');
});
```

```vue
<InputFileUploader
  @update:model-value="formData.append('file', $event)"
  name="file">참고 문서</InputFileUploader>
```
