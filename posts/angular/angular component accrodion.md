# angular base component accordion

> max-height로 애니메이션을 주기
>
> > max-height가 너무 커버리면 작아지기까지 시간이 너무 걸림
> >
> > > 크기를 딱 맞추려면 전체 container의 scrollHeight를 넣어줘야함
> > >
> > > > clientHeight 대신 scrollHeight를 써야 작아져있는 상태에서도 전체 크기를 알 수 있음

## ts

```ts
import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LepiIcon } from "@team-lepisode/components";
import { Menu } from "../../header.component";
import { AfterViewInit, ElementRef, ViewChild } from "@angular/core";

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
export class AccordionComponent implements AfterViewInit {
  @ViewChild("container") container: ElementRef<HtmlElement>;
  containerHeight?: string;
  @Input() menu?: Menu;
  @Output() onClick = new EventEmitter<string>();
  isOpen = false;

  ngAfterViewInit() {
    this.containerHeight = this.container.nativeElement.scrollHeight + "px";
  }
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
<div
  #container
  class="flex flex-col overflow-hidden transition-all duration-300"
  [ngStyle]="{
    maxHeight: isOpen ? containerHeight : '0px'
  }">
  <div class="p-4">
    <ng-content />
  </div>
</div>
```
