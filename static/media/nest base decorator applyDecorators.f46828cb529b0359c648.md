# nest base decorator custom decorator 기존 데이터 수정

> OnEvent 데코레이터 사용 시 에러를 잡아서 로그를 남기는 기능을 추가
>
> > applyDecorators를 사용하여 데코레이터를 합치면 앞에 있는 데코레이터 위에 데코레이터를 추가한 효과와 같다.

```ts
// on-safe-event.decorator.ts

import { applyDecorators, Logger } from "@nestjs/common";
import { OnEvent, OnEventType } from "@nestjs/event-emitter";
import { OnEventOptions } from "@nestjs/event-emitter/dist/interfaces";

function _OnSafeEvent() {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    const metaKeys = Reflect.getOwnMetadataKeys(descriptor.value);
    const metas = metaKeys.map((key) => [key, Reflect.getMetadata(key, descriptor.value)]);

    descriptor.value = async function (...args: any[]) {
      try {
        await originalMethod.call(this, ...args);
      } catch (err) {
        Logger.error(err, err.stack, "OnSafeEvent");
      }
    };
    metas.forEach(([k, v]) => Reflect.defineMetadata(k, v, descriptor.value));
  };
}

export function OnSafeEvent(event: OnEventType, options?: OnEventOptions | undefined) {
  // OnEvent을 _OnSafeEvent로 감싸서 리턴
  return applyDecorators(OnEvent(event, options), _OnSafeEvent());
}
```
