# angular base provider abstract service

## abstract service

```ts
export const DEVICE_SERVICE = new InjectionToken<string>("DeviceService");

export abstract class AbstractDeviceService {
  protected http = inject(HttpClient);
  protected router = inject(Router);
  public update$ = new Subject<void>(); // public 안붙여도 기본이 public

  public abstract abstractPublicFunction(): Promise<void>;
  protected abstract abstractPrivateFunction(): Promise<void>;

  async templateFunction() {
    await this.commonPrivateFunction();
    await this.abstractFunction();
    this.commonPublicFucntion();
    this.update$.next();
  }

  protected async commonPrivateFunction() {
    // logic
  }

  public commonPublicFucntion() {
    // logic...
  }
}
```

## extended service

```ts
@Injectable({
  providedIn: "root",
})
export class ElectronService extends AbstractDeviceService implements OnDestroy {
  electron = "electron" in window ? (window.electron as any) : null;

  constructor() {
    super();
  }

  ngOnDestroy(): void {
    this.update$.complete();
  }

  async abstractPublicFunction() {
    // ... logic
  }

  async abstractPrivateFunction() {
    // ... logic
  }
}

@Injectable({
  providedIn: "root",
})
export class AndroidService extends AbstractDeviceService implements OnDestroy {
  constructor() {
    super();
  }

  ngOnDestroy(): void {
    this.update$.complete();
  }

  async abstractPublicFunction() {
    // ... logic
  }

  async abstractPrivateFunction() {
    // ... logic
  }
}
```

## useFactory

```ts
{
  provide: DEVICE_SERVICE,
  useFactory: () => {
    if (isPlatform('electron')) {
      console.log('Electron Platform');
      const electronService = inject(ElectronService);
      return electronService;
    }
    if (isPlatform('android')) {
      console.log('Android Platform');
      const androidService = inject(AndroidService);
      return androidService;
    }
    throw new Error('사용할 수 없는 플랫폼입니다.');
  },
},
```
