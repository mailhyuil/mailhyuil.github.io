# angular google youtube

## install

```sh
npm i @angular/youtube-player
```

## youtube.component.ts

```ts
import { Component, computed, input } from "@angular/core";
import { YouTubePlayer } from "@angular/youtube-player";

@Component({
  selector: "app-youtube",
  templateUrl: "./youtube.component.html",
  styleUrls: ["./youtube.component.scss"],
  standalone: true,
  imports: [YouTubePlayer],
})
export class YoutubeComponent {
  url = input.required<string>();
  videoId = computed(() => {
    const url = new URL(this.url());
    const v = url.searchParams.get("v");
    const videoId = v || url.pathname.split("/").pop();
    if (!videoId) return;
    return videoId;
  });
  width = input<number | string>("100%");
  height = input<number | string>();
  playerVars = input<YT.PlayerVars>({
    controls: 0,
    showinfo: 0,
    autohide: 1,
    autoplay: 1,
  });
}
```

## youtube.component.html

```html
<youtube-player #player [videoId]="videoId()" [playerVars]="playerVars()" [width]="width()" [height]="height()" />
```
