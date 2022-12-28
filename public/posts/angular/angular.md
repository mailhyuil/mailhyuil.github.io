# Angular

## install

```
npm install -g @angular/cli

ng new my-app
```

## 문자열 바인딩

```
{{변수}}
```

## for

```
*ngFor="let i of list"
```

## if

```
*ngIf="boolean"
```

## class for style

```
[class.className]="boolean"
```

## props

> binding할 데이터 []로 바인딩해서 전달, @Input()으로 받기

```
<app-hero-detail [hero]="selectedHero"></app-hero-detail>
```

```
@Input() props
```

## emits

```
@Output() value: EventEmitter<string> = new EventEmitter();
```

## form & input

### root.module에 추가

```
  imports: [
    ...
    FormsModule,
    ReactiveFormsModule,
    ...
  ],
```

## state & event

### .component.html

```
<input class="border-2" [(ngModel)]="phone" placeholder="phone number" />
<!-- [(ngModel)] == 양방향 바인딩 -->

<button
  class="bg-slate-300 rounded px-2 ml-2"
  type="button"
  (click)="callPhone()"
>
  Call
</button>
<!-- (click) 이벤트 callPhone 메소드 호출-->
```

### .component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  phone: string = ''; // 변수 선언

  callPhone = () => {
    console.log(this.phone);
  };
}
```
