# angular css ng-deep

> shadow DOM을 사용하는 경우 부모 컴포넌트에서 자식의 스타일을 조작할 수 없다.
>
> > 이때 `::ng-deep`를 사용하면 부모 컴포넌트에서 자식 컴포넌트의 스타일을 강제로 조작할 수 있다.

```css
::ng-deep {
  .my-class {
    font-style: italic;
  }
}
```
