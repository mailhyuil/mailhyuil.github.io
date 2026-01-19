# flutter 앱 아이콘

- 이미지를 자동으로 icon으로 변환해주는 패키지
- 1024x1024px 이미지, .png (투명도 없는 배경 권장)

## install

```sh
flutter pub add flutter_launcher_icons --dev

# flutter_launcher_icons.yaml 생성 및 설정
flutter pub run flutter_launcher_icons -f <your config file name here>
```

## flutter_launcher_icons.yaml

> 아이콘 설정

```yaml
# 2. 아이콘 생성 상세 설정
flutter_launcher_icons:
  android: "launcher_icon"
  ios: true
  
  # 준비한 1024x1024 이미지 경로
  image_path: "assets/images/icon.png"
  
  # [iOS 전용 설정] 투명도 제거 (앱스토어 반려 방지)
  remove_alpha_ios: true
  
  # [안드로이드 전용 설정] 적응형 아이콘 (권장)
  # 한 장으로 끝내려면 아래 두 줄은 주석 처리해도 되지만, 
  # 배경색을 지정하면 훨씬 깔끔하게 나옵니다.
  adaptive_icon_background: "#FFFFFF" # 아이콘 배경색 (흰색 예시)
  adaptive_icon_foreground: "assets/images/icon.png" # 로고 이미지
```
