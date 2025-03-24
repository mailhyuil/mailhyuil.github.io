# angular base component editor (quill)

## install

```sh
npm i quill
npm i ngx-quill
npm i quill-image-resizor
npm i quill-mention
```

## interface

```ts
import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export interface EditorImageUploadResponse {
  url: string;
}

export interface IEditorImageService {
  upload(file: File): Observable<EditorImageUploadResponse>;
}

export const EDITOR_IMAGE_SERVICE = new InjectionToken<IEditorImageService>("EDITOR_IMAGE_SERVICE");
```

## editor.component.ts

```ts
import { booleanAttribute, Component, inject, input, OnInit, output, signal } from "@angular/core";
import { AbstractControl, FormsModule, NgControl } from "@angular/forms";

import { ErrorMessageComponent, ValueAccessorDirective } from "@mailhyuil/ng-libs";
import { LabelComponent } from "@mailhyuil/ng-libs/admin";
import { CustomOption, QuillEditorComponent, QuillModules } from "ngx-quill";
import Quill from "quill";
import ImageResizor from "quill-image-resizor";
import Toolbar from "quill/modules/toolbar";
import { EDITOR_IMAGE_SERVICE } from "../../public-api";

ImageResizor.Quill = Quill;
Quill.register("modules/imageResizor", ImageResizor);
@Component({
  selector: "mh-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.scss"],
  standalone: true,
  imports: [QuillEditorComponent, FormsModule, LabelComponent, ErrorMessageComponent],
  hostDirectives: [ValueAccessorDirective],
})
export class EditorComponent implements OnInit {
  value = signal("");
  editor?: Quill;
  modules: QuillModules = {};
  placeholder = input("글을 작성해주세요.");
  label = input("");
  required = input(false, {
    transform: booleanAttribute,
  });
  hints = input<string[]>([]);
  uploadImageChange = output<string>();
  deleteImageChange = output<string>();
  imageService = inject(EDITOR_IMAGE_SERVICE, {
    optional: true,
  });
  ngControl = inject(NgControl, {
    optional: true,
    self: true,
  });
  control?: AbstractControl;
  customOptions = input<CustomOption[]>([
    {
      import: "formats/font",
      whitelist: ["mirza", "roboto", "aref", "serif", "sansserif", "monospace"],
    },
  ]);
  private readonly valueAccessor = inject(ValueAccessorDirective<string>);
  constructor() {
    this.modules = {
      imageResizor: {},
    };
    this.valueAccessor.value.subscribe(v => {
      this.value.set(v);
    });
  }
  ngOnInit(): void {
    this.control = this.ngControl?.control || undefined;
  }

  private findImageUrls(content?: string) {
    if (!content) return [];
    const urls = content.match(/<img[^>]*src="([^"]*)"[^>]*>/g);
    if (!urls) return [];
    return urls.map(url => url.match(/src="([^"]*)"/)?.[1]).filter((url): url is string => !!url);
  }

  private findDeleteImageUrl(oldContent: string, newContent: string) {
    const oldUrls = this.findImageUrls(oldContent);
    const newUrls = this.findImageUrls(newContent);
    const urls = oldUrls?.filter(url => !newUrls?.includes(url));
    const found = urls[0];
    return found ? found : undefined;
  }

  setValue(event: string) {
    const found = this.findDeleteImageUrl(this.value(), event);
    if (found) {
      this.deleteImageChange.emit(found);
    }
    this.valueAccessor.writeValue(event);
    this.valueAccessor.valueChange(event);
  }

  onEditorCreated(editor: Quill) {
    this.editor = editor;
    const toolbar = this.editor.getModule("toolbar");
    if (toolbar instanceof Toolbar) {
      toolbar.addHandler("image", this.imageHandler.bind(this));
    }
  }

  imageHandler() {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      if (!this.imageService)
        throw new Error(`EDITOR_IMAGE_SERVICE 가 app.config.ts에 등록되지 않았습니다.
  {
        provide: EDITOR_IMAGE_SERVICE,
        useClass: ImageService,
  }
  `);

      if (!this.editor) throw new Error("editor is not defined");

      const file = input.files ? input.files[0] : null;
      if (!file) return;

      const range = this.editor.getSelection();
      if (!range) return;

      this.imageService.upload(file).subscribe(({ url }) => {
        if (!this.editor) throw new Error("editor is not defined");
        this.editor.insertEmbed(range.index, "image", `${url}`);
        this.uploadImageChange.emit(url);
        this.setValue(this.editor.root.innerHTML);
      });
    };
  }

  handleBlur() {
    this.valueAccessor.touchedChange(true);
  }
}
```

## editor.component.html

```html
<div class="flex flex-col gap-2">
  <mh-label [label]="label()" [required]="required()" [hints]="hints()"></mh-label>
  <div class="container relative w-full">
    <div
      class="absolute top-0 left-0 z-10 transition-colors duration-300 pointer-events-none error-border w-full h-[calc(100%_-_5px)]"
    ></div>
    <quill-editor
      class="size-full"
      [ngModel]="value()"
      (ngModelChange)="setValue($event)"
      [modules]="modules"
      [placeholder]="placeholder()"
      (onEditorCreated)="onEditorCreated($event)"
      (onBlur)="handleBlur()"
    ></quill-editor>
  </div>
</div>
<mh-error-message [control]="control" [name]="label()"></mh-error-message>
```
