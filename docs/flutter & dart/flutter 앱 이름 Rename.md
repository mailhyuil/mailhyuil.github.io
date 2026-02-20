# flutter 앱 배포 Rename

## install

```sh
flutter pub global activate rename

# 앱이름 변경 (사용자에게 보이는)
rename setAppName --value "새 앱 이름"

# 프로젝트 이름 변경 (개발시 사용하는 이름)
# 수동으로 직접 변경해줘야함

# 번들 아이디 변경
# 앱을 배포한 상태라면 바꾸면 안됨
rename setBundleId --value com.example.app
```
