# testing angular Directive

```ts
beforeEach(() => {
  fixture = TestBed.configureTestingModule({
    imports: [AboutComponent],
    providers: [provideHttpClient(), TwainService, UserService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  }).createComponent(AboutComponent);
  fixture.detectChanges(); // initial binding
});

it("should have skyblue <h2>", () => {
  const h2: HTMLElement = fixture.nativeElement.querySelector("h2");
  const bgColor = h2.style.backgroundColor;
  expect(bgColor).toBe("skyblue");
});
```
