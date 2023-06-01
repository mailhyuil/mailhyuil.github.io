# angular Subject

## 자식 컴포넌트

```
@Input() subject$ = new Subject<string | null>();
```

## 부모 컴포넌트

```
subject$ = new Subject();

ngOnInit(){
  if(수정){
    this.subject$.next('value');
  }
}
```

## 부모 html

```
<child [subject$]="subject$"></child>
```
