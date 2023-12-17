# angular video.js

## install

```sh
npm i video.js
```

## angular.json

> css 추가

```json
"styles": [
  "node_modules/video.js/dist/video-js.min.css",
],
```

## video.component.ts

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"],
  standalone: true,
  imports: [],
})
export class VideoComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("target") video?: ElementRef<HTMLVideoElement>;
  player?: Player;
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    if (this.video) {
      this.player = videojs(
        this.video?.nativeElement,
        {
          autoplay: true,
          controls: true,
          sources: [
            {
              src: "https://www.w3schools.com/html/mov_bbb.mp4",
              type: "video/mp4",
            },
          ],
        },
        () => {
          console.log("videojs ready", this);
        }
      );
    }
  }
  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
    }
  }
}
```

## video.component.html

> class="video-js" 추가 스타일 적용

```html
<video #target class="video-js"></video>
```
