# html autocomplete

## one-time-code

```
<input
  type="text"
  name="auth-token"
  inputmode="numeric"
  pattern="[0-9]*"
  autocomplete="one-time-code"/>
```

```
if ('OTPCredential' in window) {
  const input = document.getElementById('code');
  if (!input) return;
  const ac = new AbortController();
  const form = input.closest('form');
  if (form) {
    form.addEventListener('submit', e => {
      ac.abort();
    });
  }
  navigator.credentials.get({
    otp: { transport:['sms'] },
    signal: ac.signal
  }).then(otp => {
    input.value = otp.code;
  }).catch(err => {
    console.log(err);
  });
}
```
