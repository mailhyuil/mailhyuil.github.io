# rxjs multicasting shareReplay - cache

> 구독자들(컴포넌트에게) 서비스에서 Observable을 넘겨서 구독하게 하고 shareReplay를 사용하면 캐시된 데이터를 보내준다.
>
> > The shareReplay operator automatically creates a ReplaySubject between the original source and all future subscribers.
> >
> > 내부적으로 ReplaySubject를 생성하고 캐시된 데이터를 보내준다.
> >
> > > share와 다른 점은 http 요청을 계속날리지 않고 캐시된 데이터로 공유한다는 점

```js
shareReplay(1);
// === //
shareReplay({ bufferSize: 1, refCount: false });
```

## usage

```js
@Injectable({
  providedIn: 'root',
})
export class HomeService implements OnDestroy {
  private readonly http = inject(HttpClient);
  private readonly cache$: Observable<any>;
  private readonly refresh$ = new Subject<void>();

  ngOnDestroy (){
    this.refresh$.next();
    this.refresh$.complete();
  }

  findAll() {
    if (!this.cache$) {
      this.cache$ = this.http.get<any>('https://api.example.com/data').pipe(
        shareReplay(1)
        takeUntil(this.refresh$)
      );
    }
    return this.cache$;
  }

  refresh(){
    this.cache$ = null;
    this.refresh$.next();
  }

  refreshAndFindAll(){
    this.refresh();
    return this.findAll();
  }
}
```

```ts
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export default class HomeComponent implements OnInit {
  homeService = inject(HomeService);
  update$ = new Subject<void>();
  data: any;
  ngOnInit(): void {
    this.homeService.findAll().subscribe((res) => {
      this.data = res;
    });
  }
  update() {
    this.homeService
      .update()
      .pipe(switchMap(() => this.homeService.refreshAndFindAll()))
      .subscribe((res) => {
        this.data = res;
      });
  }
}
```
