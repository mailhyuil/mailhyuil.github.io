# flutter Kakao SDK

## install

```sh
kakao_flutter_sdk # 전체 추가
kakao_flutter_sdk_user # 카카오 로그인
kakao_flutter_sdk_talk # 카카오톡 메시지, 카카오톡 소셜(프로필 가져오기, 친구 목록 가져오기)
kakao_flutter_sdk_story # 카카오스토리
kakao_flutter_sdk_share # 카카오톡 공유
kakao_flutter_sdk_navi # 카카오내비
kakao_flutter_sdk_friend # 카카오톡 소셜(피커: 친구 선택하기)
```

## 순서

1. key 해시 등록 Signed key의 keyPassword StorePassword 넣어서 확인하기 (keytool로 생성한 Signed key를 말함)
2. manifest에 meta-data 추가
3. UserApi.instance.loginWithKakaoAccount() 호출
4. token 반환
