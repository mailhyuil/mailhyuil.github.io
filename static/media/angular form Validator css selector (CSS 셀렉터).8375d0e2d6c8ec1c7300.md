# angular Validator css class

> angular는 폼의 상태에 따라 css class를 적용한다.
>
> > class 에 style을 적용하여 폼의 상태를 표현할 수 있다.

## css class

```css
/* 유효한 상태 */
.ng-valid {
}
/* 유효하지 않은 상태 */
.ng-invalid {
}
/* 사용자가 입력한 상태 */
.ng-dirty {
}
/* input이 focus되었다가 blur된 상태 */
.ng-touched {
}
/* input이 focus되지 않은 상태 */
.ng-untouched {
}
/* 유효성 검사가 완료되지 않은 상태 */
.ng-pending {
}
/* 유효성 검사가 완료된 상태 */
.ng-pristine {
}

/* (form element에만 적용) */
.ng-submitted {
}
```

## global-form.css

```css
/* 유효한 상태 */
:host.ng-valid.ng-dirty {
  fieldset {
    outline-color: #4caf50;
  }
  label {
    color: #4caf50;
  }
}

/* 유효하지 않은 상태 */
:host.ng-invalid.ng-dirty {
  fieldset {
    outline-color: #f44336;
  }
  label {
    color: #f44336;
  }
}

/* 유효하지 않은 상태 */
:host.ng-invalid.ng-touched {
  fieldset {
    outline-color: #f44336;
  }
  label {
    color: #f44336;
  }
}
```
