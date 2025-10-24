# git branch 용어 feature-branch & topic-branch & hotfix-branch

## feature-branch & topic-branch

> 둘 다 같은 용어
>
> > 특정한 기능을 개발하기 위한 브랜치
> >
> > > feature branch에서 개발하고 완료되면 develop 브랜치에 merge한다. (squash)

## develop-branch

> main 브랜치에 병합되기 전 단계
>
> > develop branch에서 개발하고 완료되면 main 브랜치에 merge한다. (rebase)

# hotfix-branch

> 배포한 버전에 긴급하게 수정을 해야 할 필요가 cicd 파이프 라인을 간소화하여 배포하기 위한 브랜치
>
> 테스트 등의 과정이 생략될 수 있음
>
> > 이후에는 반드시 근본적인 해결책이나 정식 배포로 대체되어야 함.
> >
> > > hotfix-라는 이름을 사용하는 것이 일반적이다.

## master-branch / main-branch

> 배포를 위한 브랜치
