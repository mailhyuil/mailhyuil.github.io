# rxjs map mergeMap

> switchMap과 비슷하지만, 이전 Observable을 unsubscribe하지 않고 새로운 Observable을 구독합니다.

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
      mergeMap(() => this.getData())
    );
  }
}
```
