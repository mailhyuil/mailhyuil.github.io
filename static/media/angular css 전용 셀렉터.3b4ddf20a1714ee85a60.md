# angular css 전용 셀렉터

```css
:host {
  font-style: italic;
}

:host(.active) {
  font-weight: bold;
}

:host-context {
  background-color: blue;
}

:host-context(.active) {
  background-color: red;
}
```
