# nest base decorator applyDecorators

> ClassDecorator, MethodDecorator를 합성할 수 있는 함수

```ts
import { applyDecorators, Logger } from "@nestjs/common";
import { OnEvent, OnEventType } from "@nestjs/event-emitter";
import { OnEventOptions } from "@nestjs/event-emitter/dist/interfaces";

function _OnSafeEvent() {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    const metaKeys = Reflect.getOwnMetadataKeys(descriptor.value);
    const metadata = metaKeys.map(key => [key, Reflect.getMetadata(key, descriptor.value)]);

    descriptor.value = async function (...args: any[]) {
      try {
        await originalMethod.call(this, ...args);
      } catch (err) {
        Logger.error(err, err.stack, "OnSafeEvent");
      }
    };

    metadata.forEach(([k, v]) => Reflect.defineMetadata(k, v, descriptor.value));
  };
}

export function OnSafeEvent(event: OnEventType, options?: OnEventOptions | undefined) {
  // OnEvent을 _OnSafeEvent로 감싸서 리턴
  return applyDecorators(OnEvent(event, options), _OnSafeEvent());
}
```
