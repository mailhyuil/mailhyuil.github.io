# angular event propagate

## ts

```ts
@Component({
  selector: "app-add-memo-modal",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./add-memo-modal.component.html",
  styleUrls: ["./add-memo-modal.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddMemoModalComponent {
  @Output() close = new EventEmitter();
  clickOutside() {
    this.close.emit();
  }
  clickInside($event: Event) {
    $event.stopPropagation();
  }
}
```

## html

```html
<div (click)="clickOutside()" class="absolute z-0 transition-all left-0 top-0 w-screen h-screen flex items-center justify-center bg-black/20">
  <div (click)="clickInside($event)" class="p-5 bg-white rounded-xl">
    <ng-content></ng-content>
  </div>
</div>
```
