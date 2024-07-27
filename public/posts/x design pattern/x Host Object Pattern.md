# Host Object Pattern

> host 객체(계층)을 통해 다른 객체에 접근할 수 있도록 한다.
>
> > 이렇게 객체에 접근하는 객체(계층)을 두면, 객체를 직접 접근하는 것보다 유연하게 객체를 변경할 수 있다.

```ts
import { AbstractHttpAdapter } from "../adapters/http-adapter";
/**
 * Defines the `HttpAdapterHost` object.
 *
 * `HttpAdapterHost` wraps the underlying
 * platform-specific `HttpAdapter`.  The `HttpAdapter` is a wrapper around the underlying
 * native HTTP server library (e.g., Express).  The `HttpAdapterHost` object
 * provides methods to `get` and `set` the underlying HttpAdapter.
 *
 * @see [Http adapter](https://docs.nestjs.com/faq/http-adapter)
 *
 * @publicApi
 */
export declare class HttpAdapterHost<T extends AbstractHttpAdapter = AbstractHttpAdapter> {
  private _httpAdapter?;
  /**
   * Accessor for the underlying `HttpAdapter`
   *
   * @param httpAdapter reference to the `HttpAdapter` to be set
   */
  set httpAdapter(httpAdapter: T);
  /**
   * Accessor for the underlying `HttpAdapter`
   *
   * @example
   * `const httpAdapter = adapterHost.httpAdapter;`
   */
  get httpAdapter(): T;
}
```
