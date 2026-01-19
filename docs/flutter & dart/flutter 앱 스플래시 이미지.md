# flutter 앱 스플래시 이미지

## install

```sh
dart pub add flutter_native_splash --dev

# flutter_native_splash.yaml 생성 및 설정
dart run flutter_native_splash:create -f <your config file name here>

# 스플래시 이미지 제거
dart run flutter_native_splash:remove
```

## flutter_native_splash.yaml

```yaml
flutter_native_splash:
  # 1. 배경색 (앱의 테마색에 맞춰 지정)
  color: "#FFFFFF"
  
  # 2. 중앙에 배치할 이미지 한 장 (1024x1024 권장)
  image: "assets/images/splash_logo.png"
  
  # 3. 플랫폼별 활성화 여부
  android: true
  ios: true
  
  # 4. 안드로이드 12 이상 (필수 설정)
  # 안드로이드 12부터는 시스템 스플래시가 강제되어 별도 설정이 필요합니다.
  android_12:
    image: "assets/images/splash_logo.png"
    color: "#FFFFFF" # 배경색
    
  # (선택) 전체 화면 모드 설정
  fullscreen: true
```
