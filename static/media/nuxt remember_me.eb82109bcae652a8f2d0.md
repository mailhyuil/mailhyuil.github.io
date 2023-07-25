# nuxt remember_me

```
const rememberMeCheckbox = ref();

onMounted(() => {
  const _rememberMe = useCookie("remember_me");
  if (_rememberMe.value) {
    setValues({
      username: _rememberMe.value,
    });
    rememberMeCheckbox.value.checked = true;
  }
});

const _rememberMe = useCookie("remember_me");
if (rememberMeCheckbox.value.checked) {
  _rememberMe.value = user.username;
} else {
  _rememberMe.value = null;
}
```
