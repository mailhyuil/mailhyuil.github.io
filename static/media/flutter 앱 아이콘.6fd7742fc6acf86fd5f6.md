# flutter 앱 아이콘

## install

```sh
flutter pub add flutter_launcher_icons --dev

# flutter_launcher_icons.yaml 생성 및 설정

flutter pub run flutter_launcher_icons -f <your config file name here>
```

## flutter_launcher_icons.yaml

> 아이콘 설정

```yaml
flutter_launcher_icons:
  android: "launcher_icon"
  ios: true
  image_path: "assets/icon/icon.png"
  min_sdk_android: 21 # android min sdk min:16, default 21
  web:
    generate: true
    image_path: "path/to/image.png"
    background_color: "#hexcode"
    theme_color: "#hexcode"
  windows:
    generate: true
    image_path: "path/to/image.png"
    icon_size: 48 # min:48, max:256, default: 48
  macos:
    generate: true
    image_path: "path/to/image.png"
```
