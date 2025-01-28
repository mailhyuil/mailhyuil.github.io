# angular base component editor (quill)

## install

```sh
npm i quill
npm i ngx-quill
npm i quill-image-resizor
npm i quill-mention
npm i highlight.js
```

## app.config.ts

```ts
import { provideQuillConfig } from "ngx-quill";

provideQuillConfig({
    customOptions: [
    {
        import: "formats/font",
        whitelist: [
        "mirza",
        "roboto",
        "aref",
        "serif",
        "sansserif",
        "monospace",
        ],
    },
    ],
}),
```

## editor.component.ts

```ts
import { ValueAccessorDirective } from "@/common";
import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import hljs from "highlight.js";
import { QuillEditorComponent, QuillModules } from "ngx-quill";
import Quill from "quill";
import ImageResizor from "quill-image-resizor";

// If Quill does not come from window-object -> set find method to correct instance
ImageResizor.Quill = Quill;
Quill.register("modules/imageResizor", ImageResizor);

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.scss"],
  standalone: true,
  imports: [CommonModule, QuillEditorComponent, FormsModule],
  hostDirectives: [ValueAccessorDirective],
})
export default class EditorComponent {
  value = "";
  modules: QuillModules = {};
  placeholder = input<string>("글을 작성해주세요.");
  constructor(public valueAccessor: ValueAccessorDirective<string>) {
    this.modules = {
      syntax: { hljs },
      imageResizor: {},
    };
    valueAccessor.value.subscribe(v => (this.value = v));
  }
  setValue(event: any) {
    const newValue = event;
    this.value = newValue;
    this.valueAccessor.writeValue(this.value);
    this.valueAccessor.valueChange(this.value);
  }
}
```

## editor.component.html

```html
<quill-editor [ngModel]="value" (ngModelChange)="setValue($event)" [modules]="modules" [placeholder]="placeholder()">
  >
</quill-editor>
```
