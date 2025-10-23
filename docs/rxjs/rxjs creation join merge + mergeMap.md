# merge + mergeMap

> update$나 forceReload$가 발생하면 getDataOnce()를 실행한다.

```js
import { Subject } from 'rxjs/Subject';
import { merge } from 'rxjs/observable/merge';
import { mergeMap } from 'rxjs/operators';

@Component({
})
export class JokeListComponent implements OnInit {
  update$ = new Subject<void>();
  forceReload$ = new Subject<void>();

  ngOnInit() {
    const updates$ = merge(this.update$, this.forceReload$).pipe(
      mergeMap(() => this.getDataOnce())
    );
  }
}
```
