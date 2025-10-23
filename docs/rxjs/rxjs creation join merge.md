# merge

> observable을 전부 합쳐준다. 동시성 보장

```js
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { skip, mapTo } from 'rxjs/operators';

@Component({
  ...
})
export class JokeListComponent implements OnInit {
  showNotification$: Observable<boolean>;
  update$ = new Subject<void>();
  ...

  ngOnInit() {
    ...
    const initialNotifications$ = this.jokeService.jokes.pipe(skip(1));
    const show$ = initialNotifications$.pipe(mapTo(true));
    const hide$ = this.update$.pipe(mapTo(false));
    this.showNotification$ = merge(show$, hide$);
  }
  ...
}
```
