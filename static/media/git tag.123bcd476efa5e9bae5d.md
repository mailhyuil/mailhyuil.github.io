# git tag

> 프로덕션 배포, 라이브러리/패키지 개발 등에서 version을 명시하여 사용자가 특정 버전을 참조할 수 있도록 명시하는 기능

```sh
# 간단한 태그
git tag v1.0.0

# 주석이 있는 태그 (권장)
git tag -a v1.0.0 -m "Release version 1.0.0"

# 특정 commit에 태그
git tag v1.0.0 abc1234

# 태그 푸시
git push origin v1.0.0
# 모든 태그 푸시
git push origin --tags
```
