# testing angular Component

```ts
describe("SomeComponent", () => {
  it("#clicked() should toggle #isOn", () => {
    const component = new SomeComponent();
    expect(component.isOn).withContext("off at first").toBe(false);

    component.clicked();
    expect(component.isOn).withContext("on after click").toBe(true);

    component.clicked();
    expect(component.isOn).withContext("off after second click").toBe(false);
  });

  it('#clicked() should set #message to "is on"', () => {
    const component = new SomeComponent();
    expect(component.message)
      .withContext("off at first")
      .toMatch(/is off/i);

    component.clicked();
    expect(component.message).withContext("on after clicked").toMatch(/is on/i);
  });

  it("raises the selected event when clicked", () => {
    const component = new SomeComponent();
    const data: Data = { id: 42, name: "Test" };
    component.data = data;

    /// @Output() selected = new EventEmitter<Data>();
    component.selected.pipe(first()).subscribe((selectedData: Data) => expect(selectedData).toBe(data));
    component.click();
  });
});
```
