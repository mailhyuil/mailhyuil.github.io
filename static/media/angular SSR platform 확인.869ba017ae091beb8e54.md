# platform이 서버인지 브라우저인지 확인하는 방법

```ts
export class AppComponent implements OnInit {
  isBrowser: boolean = false;
  isServer: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) this.isBrowser = true;
    if (isPlatformServer(this.platformId)) this.isServer = true;
  }
}
```
