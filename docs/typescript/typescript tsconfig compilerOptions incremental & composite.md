# typescript tsconfig compilerOptions incremental & composite

## incremental

> 이전 빌드 결과를 저장해, 변경된 파일만 다시 컴파일
>
> > 빌드 캐시 생성 (.tsbuildinfo)
> >
> > 이 파일을 이용해 변경된 파일만 다시 컴파일

## composite

> "composite": true를 켜면 프로젝트 간 참조 관계(Project References) 기반 빌드를 사용하게 되는데,
>
> 이때 변경되지 않은 패키지는 다시 컴파일되지 않음
>
> > 내부적으로 incremental 빌드 시스템을 강제 활성화
