# input move cursor to next input

```js
const yearInput = document.getElementById("year");
const monthInput = document.getElementById("month");
const dateInput = document.getElementById("date");

if (yearInput.value.length === 4) {
  monthInput?.nativeElement.focus();
  monthInput?.nativeElement.select();
}

if (monthInput.value.length === 2) {
  dateInput?.nativeElement.focus();
  dateInput?.nativeElement.select();
}
```
