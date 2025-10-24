# angular video capture

> canvas를 사용해서 video를 캡쳐하여 썸네일을 만들어주는 컴포넌트

## ts

```ts
import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { IFileDTO } from "@cms/common";

@Component({
  selector: "app-video-thumbnail",
  templateUrl: "./video-thumbnail.component.html",
  styleUrls: ["./video-thumbnail.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export class VideoThumbnailComponent implements OnInit, AfterViewInit {
  @Input() file!: IFileDTO;
  @Input() size: number = 100;
  @ViewChild("myCanvas") canvas?: ElementRef<HTMLCanvasElement>;
  constructor() {}
  ngAfterViewInit(): void {
    if (this.canvas?.nativeElement) {
      this.capture(this.canvas?.nativeElement, this.file.url);
    }
  }

  ngOnInit() {}

  capture(canvas: HTMLCanvasElement, videoUrl: string) {
    const video: HTMLVideoElement | null = document.createElement("video") as HTMLVideoElement;
    video.src = videoUrl;
    video.play();
    setTimeout(() => {
      canvas.getContext("2d")?.drawImage(video, 0, 0, canvas.width, canvas.height);
      video.pause();
    }, 500);
  }
}
```

## html

```html
<canvas *ngIf="file && file.type.includes('video')" #myCanvas [width]="size" [height]="size"></canvas>
```
