# angular props & emits

## props

### html

```html
<app-some [some]="value"></app-some>
```

### ts

```ts
@Input() some:string
```

## emits

### html

```html
<app-some (some)="$event"></app-some>
```

### ts

```ts
@Output() some = new EventEmitter<string>();

handleSome(value:string){
    this.some.emit(value)
}

// <div (click)="handleSome('something')"></div>

// or
doSomething(){
    this.some.emit('done!')
}
```
