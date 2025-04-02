# angular ControlValueAccessor

> forms API와 native element를 연결하는 브릿지 역할을 하는 인터페이스
>
> > 단순히 원시값을 받아서 사용한다면 필요없다.
> >
> > > 유효성 검사기를 사용하거나 커스텀 컨트롤을 만들때 사용한다.

## interface ControlValueAccessor

```ts
interface ControlValueAccessor {
  writeValue(obj: any): void
  registerOnChange(fn: any): void
  registerOnTouched(fn: any): void
  setDisabledState(isDisabled: boolean)?: void
}
```

## implements

> ControlValueAccessor를 구현하는 것은 다음과 같다.

```ts
CheckboxControlValueAccessor;
DefaultValueAccessor;
NumberValueAccessor;
RadioControlValueAccessor;
RangeValueAccessor;
SelectControlValueAccessor;
SelectMultipleControlValueAccessor;
```

## angular ControlValueAccessor

```js
providers: [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: SomeComponent,
    multi: true,
  },
],
```

```js
control?: FormControl;

ngOnInit(): void {
  // /** FormControl Instance 주입 */
  const ngControl: NgControl | null = this.injector.get(NgControl, null);
  if (ngControl) {
    this.control = ngControl.control as FormControl;
  }
}
```

```js
value: Type[] = [];
isDisabled = false;
isLoading = false;
isActive = false;

onChange (value: Type[]) {
  this.value = value;
};
writeValue(obj: any): void {
  this.value = obj;
}
onTouched () {};
registerOnChange(fn: any): void {
  this.onChange = fn;
}
registerOnTouched(fn: any): void {
  this.onTouched = fn;
}
setDisabledState?(isDisabled: boolean): void {
  this.isDisabled = isDisabled;
}

customChangeValueEvent(){
  // ..logic
    this.writeValue(newValue);
    this.onChange(this.value);
}
```
