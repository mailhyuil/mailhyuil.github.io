# nest base decorator 내에서 Inject

```ts
import { Inject } from "@nestjs/common";
export function yourDecorator() {
  const injectYourService = Inject(YourServiceClass);

  return (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) => {
    // this is equivalent to have a constructor like constructor(yourservice: YourServiceClass)
    // note that this will injected to the instance, while your decorator runs for the class constructor
    injectYourService(target, "yourservice");

    // do something in you decorator

    // we use a ref here so we can type it
    const yourservice: YourServiceClass = this.yourservice;
    yourservice.someMethod(someParam);
  };
}
```
