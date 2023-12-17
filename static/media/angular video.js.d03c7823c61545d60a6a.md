# angular video.js

## install

```sh
npm i video.js
```

## angular.json

```json
{
      "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
      "version": 1,
      "newProjectRoot": "projects",
      "projects": {
        "app-video-player": {
          "projectType": "application",
          "schematics": {
            "@schematics/angular:component": {
              "style": "scss"
            }
          },
          "root": "",
          "sourceRoot": "src",
          "prefix": "app",
          "architect": {
            "build": {
              "builder": "@angular-devkit/build-angular:browser",
              "options": {
                "outputPath": "dist/app-video-player",
                "index": "src/index.html",
                "main": "src/main.ts",
                "polyfills": "src/polyfills.ts",
                "tsConfig": "tsconfig.app.json",
                "aot": false,
                "assets": [
                  "src/favicon.ico",
                  "src/assets"
                ],
                "styles": [
                  "src/styles.scss",
                  "node_modules/video.js/dist/video-js.min.css",
                  "node_modules/videojs-http-source-selector/dist/videojs-http-source-selector.css"
                ],
                "scripts": [
                  "node_modules/video.js/dist/video.js",
                  "node_modules/videojs-contrib-quality-levels/dist/videojs-contrib-quality-levels.js",
                  "node_modules/videojs-http-source-selector/dist/videojs-http-source-selector.min.js"
                ]
              },
//              ...생략
```

## video.component.ts

```ts
import { AfterViewInit, Component, Input } from "@angular/core";

import * as videojs from "video.js";
import "videojs-contrib-quality-levels";
import "videojs-http-source-selector";

@Component({
  selector: "video-player",
  template: ` <video id="video-player" class="video-js vjs-big-play-centered" controls crossorigin></video> `,
  styles: [],
})
export class VideoPlayerComponent implements AfterViewInit {
  // 영상 소스 URL을 받아 옴
  @Input() videoURL: string;

  // Video.js 의 기본 값을 세팅 해줍니다.
  public videoJS = videojs.default;
  // videoPlayer의 타입형을 video.js의 VideoPlayer로 지정합니다.
  private videoPlayer: videojs.VideoJsPlayer;
  // video.js의 옵션입니다. 해당 컴포넌트에서는 따로 옵션을 추가하지 않았습니다.
  // 참고 : https://docs.videojs.com/tutorial-options.html
  private options: videojs.VideoJsPlayerOptions;

  ngAfterViewInit(): void {
    this.videoPlayer = this.videoJS("video-player", this.options);
    /* 
    			HttpSourceSelector 플러그인을 Add 해줍니다. videojs-contrib-quality-levels 와
    			videojs-http-source-selector 를 import 해야합니다. (video.js 플러그인 적용 방법)
    			videojs-contrib-quality-levels는 videojs-http-source-selector가 의존하고 있어서
    			함께 import 했습니다.
    		*/
    this.videoPlayer.httpSourceSelector();
    // 만약, hls가 아닌 영상이라면 type을 변경하면 됩니다.
    this.videoPlayer.src({
      src: this.videoURL,
      type: "application/x-mpegURL",
    });
  }
}
```
