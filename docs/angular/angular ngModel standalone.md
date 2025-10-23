# angular standalone ngModel

> formGroup 안에 들어있지만 formControl으로는 사용하지 않을 때

```
<input
  [(ngModel)]="standaloneValue"
  [ngModelOptions]="{standalone: true}"
>
</lepi-input-text>
```
