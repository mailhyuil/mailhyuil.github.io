# angular css ng-deep

> shadow DOM을 사용하는 경우 부모 컴포넌트 css에서 자식의 스타일을 조작할 수 없다.
>
> > 이때 `::ng-deep`를 사용하면 부모 컴포넌트에서 자식 컴포넌트의 스타일을 강제로 조작할 수 있다.
> >
> > `::ng-deep`는 deprecated 되었지만 아직 사용 가능하다.

```css
::ng-deep {
  .my-class {
    font-style: italic;
  }
}
```

## alternative

> encapsulation: ViewEncapsulation.None 을 사용하면 CSS Encapsulation을 비활성화 할 수 있다.

```ts
@Component({
  selector: '',
  template: '',
  styles: [''],
  encapsulation: ViewEncapsulation.None  // Use to disable CSS Encapsulation for this component
})
```
