# angular Validator css class

> angular는 폼의 상태에 따라 css class를 적용한다.
>
> > class 에 style을 적용하여 폼의 상태를 표현할 수 있다.

## css class

```txt
.ng-valid
.ng-invalid
.ng-pending
.ng-pristine
.ng-dirty
.ng-untouched
.ng-touched
.ng-submitted (폼 엘리먼트에만 적용)
```

## forms.css

```css
.ng-valid[required],
.ng-valid.required {
  border-left: 5px solid #42a948; /* green */
}

.ng-invalid:not(form) {
  border-left: 5px solid #a94442; /* red */
}

.alert div {
  background-color: #fed3d3;
  color: #820000;
  padding: 1rem;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

select {
  width: 100%;
  padding: 0.5rem;
}
```
