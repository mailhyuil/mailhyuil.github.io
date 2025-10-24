# github PR - Pull Request

1. 브랜치 생성

```sh
git checkout -b [브랜치명]
# e.g. git checkout -b feature/login
```

2. 작업 후 커밋

```sh
git add .
git commit -m "커밋 메시지"
```

3. 원격 저장소에 푸시

```sh
git push origin [브랜치명]
# e.g. git push origin feature/login
```

4. PR 생성

- GitHub에서 PR을 생성합니다.
- PR 제목과 설명을 작성합니다.
- PR을 생성할 브랜치를 선택합니다.
- PR을 리뷰어에게 할당합니다.
- PR을 생성합니다.

5. 리뷰 요청

- 리뷰어에게 PR을 요청합니다.
- 리뷰어는 PR을 검토하고 피드백을 제공합니다.

6. 리뷰 반영

- 리뷰어의 피드백을 반영하여 코드를 수정합니다.
- 수정한 코드를 커밋하고 푸시합니다.

7. PR 머지

- 리뷰어가 PR을 승인하면 PR을 머지합니다.
- PR을 머지하면 브랜치가 메인 브랜치에 병합됩니다.

8. 브랜치 삭제

- PR이 머지된 후 브랜치를 삭제합니다.
- 브랜치를 삭제하면 원격 저장소에서도 브랜치가 삭제됩니다.

9. PR 닫기

- PR을 닫습니다.
- PR을 닫으면 PR이 완료됩니다.
