# flutter Camera

## install

```sh
flutter pub add camera
```

## android 설정

> android/app/build.gradle

```
defaultConfig {
    minSdkVersion 21
}
```

## ios 설정

> ios/Runner/Info.plist

```
<plist>
<dict>
	<key>NSCameraUsageDescription</key>
	<string>Camera permission is required.</string>
	<key>NSMicrophoneUsageDescription</key>
	<string>Microphone permission is required.</string>
</dict>
</plist>
```

## 사용법

```

```
