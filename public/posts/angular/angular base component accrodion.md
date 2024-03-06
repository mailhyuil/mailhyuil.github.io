# angular base component accordion

## ts

```ts
import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LepiIcon } from "@team-lepisode/components";
import { Menu } from "../../header.component";

export type Menu = {
  title: string;
  link: string;
  children?: Menu[];
};

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  standalone: true,
  imports: [CommonModule, LepiIcon, RouterModule],
})
export class AccordionComponent {
  @Input() menu?: Menu;
  @Output() onClick = new EventEmitter<string>();
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  _onClick(link: string) {
    this.onClick.emit(link);
  }
}
```

## html

```html
<div *ngIf="menu">
  <div (click)="toggle()" class="p-5 border-b cursor-pointer">
    <div class="flex items-center justify-between">
      <div class="font-bold">{{ menu.title }}</div>
      <lepi-icon
        class="block duration-300 ease-out bg-gray-800 size-7"
        [class.rotate-180]="isOpen"
        [class.opacity-30]="!isOpen"
        [name]="isOpen ? 'heroicons:minus' : 'heroicons:plus'"></lepi-icon>
    </div>
  </div>
  <div class="overflow-hidden duration-500 ease-in-out delay-0 bg-gray-50" [class.max-h-0]="!isOpen" [class.max-h-[9999px]]="isOpen">
    @for(child of menu.children; track $index){
    <p class="p-5 font-bold text-gray-500 cursor-pointer hover:text-primary" (click)="_onClick(child.link)"> {{ child.title }} </p>
    }
  </div>
</div>
```
