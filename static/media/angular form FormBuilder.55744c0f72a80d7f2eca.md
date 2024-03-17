# angular form FormBuilder

```js
form = this.fb.nonNullable.group({
  direction: this.fb.nonNullable.control("", {
    validators: [Validators.required],
    updateOn: "blur",
    asyncValidators: [],
  }),
  eventId: ["", [Validators.required]],
  deviceId: ["", [Validators.required]],
});
```
