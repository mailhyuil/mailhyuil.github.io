# angular 무한 스크롤

## ts

```ts
import { CommonModule } from "@angular/common";
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, ViewChild, signal } from "@angular/core";
import { takeUntilDestroyed, toObservable, toSignal } from "@angular/core/rxjs-interop";
import { IconComponent } from "@wings/angular-libs";
import { INoticeDTO } from "@wings/libs";
import { HttpService } from "apps/client/src/app/services/http.service";
import { lastValueFrom, switchMap } from "rxjs";

@Component({
  selector: "wings-master-notice",
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: "./master-notice.page.html",
  styleUrls: ["./master-notice.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MasterNoticePage implements AfterViewInit {
  @ViewChild("container") container?: ElementRef<HTMLDivElement>;
  option = signal({
    cursor: new Date(),
  });
  notice$ = toObservable(this.option).pipe(
    takeUntilDestroyed(),
    switchMap((option) => {
      return this.httpService.get<INoticeDTO[]>("notice/scroll-search", {
        params: { ...option },
      });
    })
  );
  notice = toSignal(this.notice$);
  loading = signal(false);
  constructor(private readonly httpService: HttpService, private readonly ngZone: NgZone, private readonly cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.ngZone.runOutsideAngular(() => {
        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
          entries.forEach(async (entry) => {
            if (entry.isIntersecting) {
              if (this.notice()!.length > 0) {
                const newData = await this.getMoreNotice();

                newData.forEach((data) => {
                  this.notice()!.push(data);
                });
                this.cdr.detectChanges();

                observer.unobserve(entry.target);

                const newTarget = this.getNewTarget();
                if (newTarget === entry.target) {
                  return;
                }
                observer.observe(newTarget!);
              }
            }
          });
        });

        const newTarget = this.getNewTarget();
        observer.observe(newTarget!);
      });
    }, 100);
  }

  private getNewTarget() {
    if (this.container?.nativeElement) {
      const children = this.container.nativeElement.childNodes;
      const newTarget = children[children.length - 2] as Element;
      return newTarget;
    }
    return null;
  }

  private async getMoreNotice() {
    this.loading.update(() => true);
    this.cdr.detectChanges();
    const newData = await lastValueFrom(
      this.httpService.get<INoticeDTO[]>("notice/scroll-search", {
        params: {
          cursor: new Date(this.notice()!.at(-1)!.createdAt),
        },
      })
    );
    this.loading.update(() => false);
    this.cdr.markForCheck();
    return newData;
  }
}
```

## html

```html
<div>
  <div #container class="flex flex-col" *ngIf="notice() as notice">
    <div *ngFor="let i of notice">{{ i }}</div>
  </div>
  <div *ngIf="loading()" class="flex justify-center p-5">
    <app-icon class="text-main-700 text-2xl" name="svg-spinners:12-dots-scale-rotate"></app-icon>
  </div>
</div>
```
