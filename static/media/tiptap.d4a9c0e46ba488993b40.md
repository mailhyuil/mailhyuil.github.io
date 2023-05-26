# tiptap

## ts

```ts
import { CommonModule } from "@angular/common";
import { Component, Input, OnDestroy, Self } from "@angular/core";
import { FormsModule, NgControl } from "@angular/forms";
import { Optional } from "@nestjs/common";
import { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import { NgxTiptapModule } from "ngx-tiptap";
import { IconComponent } from "../icon/icon.component";
import { CustomValueAccessor } from "../custom-value-accessor";

@Component({
  selector: "app-editor",
  standalone: true,
  imports: [CommonModule, NgxTiptapModule, FormsModule, IconComponent],
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.scss"],
})
export class EditorComponent extends CustomValueAccessor<string> implements OnDestroy {
  @Input() label?: string;
  editor = new Editor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: "h-52 outline-primary rounded border-2 p-2 overflow-y-auto",
      },
    },
  });

  constructor(@Self() @Optional() public readonly ngControl: NgControl) {
    super();
    if (this.ngControl) ngControl.valueAccessor = this;
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
```

## html

```html
<div *ngIf="editor">
  <div class="label-wrapper" *ngIf="label">
    <span class="input-span">{{ label }}</span>
    <p class="input-required" *ngIf="required">*</p>
  </div>
  <div class="flex items-center justify-between py-2 text-xl text-gray-800">
    <div class="flex gap-2">
      <button (click)="editor.chain().focus().toggleHeading({ level: 1 }).run()">
        <app-icon name="ri:h-1" />
      </button>
      <button (click)="editor.chain().focus().toggleHeading({ level: 2 }).run()">
        <app-icon name="ri:h-2" />
      </button>
      <button (click)="editor.chain().focus().toggleHeading({ level: 3 }).run()">
        <app-icon name="ri:h-3" />
      </button>
      <button (click)="editor.chain().focus().toggleHeading({ level: 4 }).run()">
        <app-icon name="ri:h-4" />
      </button>
      <button (click)="editor.chain().focus().toggleHeading({ level: 5 }).run()">
        <app-icon name="ri:h-5" />
      </button>
      <button (click)="editor.chain().focus().toggleHeading({ level: 6 }).run()">
        <app-icon name="ri:h-6" />
      </button>
    </div>
    <div class="flex gap-2">
      <button (click)="editor.chain().focus().toggleBold().run()">
        <app-icon name="ri:bold" />
      </button>
      <button (click)="editor.chain().focus().toggleItalic().run()">
        <app-icon name="ri:italic" />
      </button>
      <button (click)="editor.chain().focus().toggleStrike().run()">
        <app-icon name="ri:strikethrough-2" />
      </button>
    </div>
  </div>
  <tiptap-editor [editor]="editor" [(ngModel)]="value"></tiptap-editor>
</div>
```
