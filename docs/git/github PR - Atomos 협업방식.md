# github PR - Pull Atomos 협업방식

## 표준 협업 워크플로 (Workflow)

1. 최신 상태 유지: 작업 시작 전 main 브랜치를 최신 상태로 업데이트합니다.
2. 브랜치 생성: 본인의 이름이 포함된 브랜치를 생성합니다.
3. 작업 및 커밋: 로컬에서 개발을 진행하고 변경 사항을 기록합니다.
4. 원격 저장소에 푸시: 생성한 브랜치를 GitHub에 올립니다.
5. Pull Request (PR) 생성: GitHub UI에서 main 브랜치로 병합을 요청합니다.
6. 코드 리뷰 및 머지: 동료의 승인을 받은 후 main에 최종 병합합니다.

## commands

```sh
## 시작하기
# 1. 메인 브랜치로 이동
git checkout main
# 2. 서버의 최신 코드 가져오기
git pull origin main
# 3. 새로운 작업 브랜치 생성 (예: git checkout -b sangbaek/dashboard)
git checkout -b 이름/작업내용

## 개발진행
# 1. 변경된 파일 확인
git status
# 2. 스테이징 영역에 추가
git add .
# 3. 커밋 메시지 작성
git commit -m "feat: 로그인 기능 구현"

## PR
# 1. 원격 저장소로 내 브랜치 전송
git push origin 이름/작업내용

## PR 머지가 완료된 후 정리
# 1. 다시 메인으로 이동
git checkout main
# 2. 방금 합쳐진 따끈따끈한 코드를 내 로컬 메인에도 반영
git pull origin main
# 3. 역할이 끝난 내 작업 브랜치는 삭제 (깔끔하게 관리하기 위함)
git branch -d 이름/작업내용
```
