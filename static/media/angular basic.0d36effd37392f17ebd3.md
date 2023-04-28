# Angular

## install

```
npm install -g @angular/cli

ng new my-app
```

## tsconfig.json

> constructor 안에서 초기화하라는 오류 없애기

```json
"compilerOptions":{
    "strictPropertyInitialization": false,
}
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

## class

```
<div [ngClass]="{'enabled': item.checked, 'disabled': !item.checked}></div>
<div [class.grey]="!item.checked"></div>

<div [ngClass]="{'disabled grey': !item.checked}></div>
<div [ngClass]="[disabled, grey]"></div>

<div [ngClass]="item.checked ? 'enabled' : 'disabled'</div>

<div [ngClass]="checkStatus()"></div>
```

## style

```
[ngStyle]="{ width: widthValue }
```
