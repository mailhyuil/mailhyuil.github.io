# angular base component Ref

## ElementRef

> html 표준 태그를 사용할 때

```ts
@ViewChild('ele', {read: ElementRef}) ele: ElementRef;
@ViewChild('ele') ele: ElementRef<HtmlDivElement>;
@ViewChildren('ele') ele: QueryList<ElementRef<HtmlDivElement>>;
```

## TemplateRef

> ng-template을 사용할 때

```ts
@ViewChild('ele', {read: TemplateRef}) ele: TemplateRef;
```

## ViewRef

```ts
@ViewChild('ele', {read: ViewRef}) ele: ViewRef;
```

## ViewContainerRef

> a collection of ViewRef items.

```ts
@ViewChild('ele', {read: ViewContainerRef}) ele: ViewContainerRef;
```

## ComponentRef

```ts
@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.scss"],
  standalone: true,
  imports: [FileUploadComponent],
})
export class ParentComponent {
  @ViewChild(FileUploadComponent) fileUploadComponent!: FileUploadComponent;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngAfterViewInit(): void {}
}
```
