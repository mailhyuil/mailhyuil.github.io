# git commit Convention

## .gitmessage.txt

```txt
# type: Subject (아래에 작성)

# Body(아래에 작성)

# Footer(아래에 작성)

##### type list #####

# feat: 새로운 기능 추가
# fix: 버그 수정
# refactor: 코드 리팩토링
# chore: 소스코드 외 수정 사항, 패키지 추가, 파일 삭제, docs 수정... (.gitignore, build.gradle 같은)
# style: 디자인 변경
# test: 테스트 코드, 리팩토링 테스트 코드 추가
# ci: CI 관련 수정

##### Subject list #####

# Update : 수정
# Add : 추가
# Remove : 삭제
# Rename : 이름 변경
# Simplify : 단순화
# Implement : 구현
# Prevent : 방지
# Move : 이동

##### 예시 #####

# type: Subject (아래에 작성)
# feat(client, server): "로그인 기능 구현"

# Body(아래에 작성)
# 로그인 시 JWT 발급

# Footer(아래에 작성)
# Resolves: #111
# Ref: #122
# related to: #30, #50
```

## 적용

```sh
git config --global commit.template <.gitmessage.txt 경로>
```
