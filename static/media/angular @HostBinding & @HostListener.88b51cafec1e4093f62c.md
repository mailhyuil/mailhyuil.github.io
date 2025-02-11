# @HostBinding / @HostListening

> component를 감싸는 최상위 객체에 반영됨

## @HostBinding('class.valid') isValid

> property를 바인딩

```ts
@Directive({ selector: "[ngModel]" })
class NgModelStatus {
  constructor(public control: NgModel) {}
  @HostBinding("class.valid") get valid() {
    return this.control.valid;
  }
  @HostBinding("class.invalid") get invalid() {
    return this.control.invalid;
  }
}

@Component({
  selector: "app",
  template: `
    <input [(ngModel)]="prop" />
  `,
})
class App {
  prop;
}
```

## @HostListener('click', [$event])

> event 구독
>
> > 자동으로 구독 해제됨

```ts
@Directive({ selector: "button[counting]" })
class CountClicks {
  numberOfClicks = 0;

  @HostListener("click", ["$event.target"])
  onClick(btn) {
    console.log("button", btn, "number of clicks:", this.numberOfClicks++);
  }
}

@Component({
  selector: "app",
  template: "<button counting>Increment</button>",
})
class App {}
```
