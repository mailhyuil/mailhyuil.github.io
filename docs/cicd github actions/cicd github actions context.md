# cicd github actions context

[github-actions-context-document](https://docs.github.com/ko/actions/learn-github-actions/contexts)

## 기본 제공 변수

```
github.head_ref : 풀 리퀘스트를 트리거한 브랜치 또는 태그 이름	// master
github.sha : 풀 리퀘스트를 트리거한 커밋의 SHA	// 6dcb09b5b57875f334f61aebed695e2e4193db5e

github.ref_type	: 액션을 실행을 트리거한 유형	// tag, branch
github.ref_name	: 액션을 트리거한 브랜치 또는 태그 이름	// master(branch), v1.0.0(tag)
github.workspace : 액션 작업 시 현재 디렉토리 위치를 나타냄	// /home/runner/work/deployTest/deployTest

GITHUB_SHA	: 액션을 트리거한 커밋의 SHA	// 6dcb09b5b57875f334f61aebed695e2e4193db5e
GITHUB_REF	: 액션을 트리거한 브랜치 또는 태그 이름	// refs/heads/master
```

## usage

```yaml
- name: Create docker image
  run: ./docker-build.sh ${{ github.head_ref }}.${{ github.sha }}
```
