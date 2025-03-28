# angular material portal

> 컴포넌트 내의 portalOutlet으로 컴포넌트, ng-template, DOM을 불러오게 해주는 기능
>
> > ComponentPortal, TemplatePortal, DomPortal

## ComponentPortal

> 컴포넌트를 portalOutlet으로 불러오게 해주는 기능

```ts
import { ComponentPortal, PortalModule, Portal } from "@angular/cdk/portal";
import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RouterModule } from "@angular/router";
@Component({
  selector: "app-default-layout",
  templateUrl: "./default-layout.component.html",
  styleUrls: ["./default-layout.component.scss"],
  standalone: true,
  imports: [CommonModule, PortalModule],
})
export default class DefaultLayoutComponent implements AfterViewInit {
  componentPortal = signal<ComponentPortal<ComponentPortalExample>>();
  ngAfterViewInit(): void {
    this.componentPortal = new ComponentPortal(ComponentPortalExample);
  }
}

@Component({
  selector: "component-portal-example",
  template: "Hello, this is a component portal",
})
export class ComponentPortalExample {}

// <ng-template [cdkPortalOutlet]="componentPortal()"></ng-template>
```

## TemplatePortal

> ng-template 을 portalOutlet으로 불러오게 해주는 기능

```ts
import { TemplatePortal, PortalModule, Portal } from "@angular/cdk/portal";
import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RouterModule } from "@angular/router";
@Component({
  selector: "app-default-layout",
  templateUrl: "./default-layout.component.html",
  styleUrls: ["./default-layout.component.scss"],
  standalone: true,
  imports: [CommonModule, PortalModule],
})
export default class DefaultLayoutComponent implements AfterViewInit {
  templatePortalContent = viewChild<ElementRef<HTMLElement>>("templatePortalContent");
  templatePortal = signal<TemplatePortal<any>>();
  ngAfterViewInit(): void {
    const templatePortalContent = this.templatePortalContent()?.nativeElement;
    if (!templatePortalContent) return;
    this.templatePortal = new TemplatePortal(templatePortalContent);
  }
}
// <ng-template [cdkPortalOutlet]="templatePortal()"></ng-template>
// <ng-template #templatePortalContent>Hello, this is a template portal</ng-template>
```

## DomPortal

> DOM (일반 html element)을 portalOutlet으로 불러오게 해주는 기능

```ts
import { DomPortal, PortalModule, Portal } from "@angular/cdk/portal";
import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RouterModule } from "@angular/router";
@Component({
  selector: "app-default-layout",
  templateUrl: "./default-layout.component.html",
  styleUrls: ["./default-layout.component.scss"],
  standalone: true,
  imports: [CommonModule, PortalModule],
})
export default class DefaultLayoutComponent implements AfterViewInit {
  domPortalContent = viewChild<ElementRef<HTMLElement>>("domPortalContent");
  domPortal = signal<DomPortal<any>>();
  ngAfterViewInit(): void {
    const domPortalContent = this.domPortalContent()?.nativeElement;
    if (!domPortalContent) return;
    this.domPortal = new DomPortal(domPortalContent);
  }
}

// <ng-template [cdkPortalOutlet]="domPortal()"></ng-template>
// <div #domPortalContent>Hello, this is a DOM portal</div>
```
