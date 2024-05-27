# linux inode

> 유닉스 계통 파일 시스템에서 사용하는 자료구조
>
> > 정규 파일, 디렉터리 등 파일 시스템에 관한 정보를 가지고 있다.

## inode 가 가지고 있는 정보

```sh
파일 모드 : 파일과 관계된 접근과 실행 권한을 저장하는 16비트 플래그
링크 수 : 이 아이노드에 대한 디렉터리 참조 수
소유자 아이디 : 파일의 소유자
그룹 아이디 : 이 파일과 관계된 그룹 소유자
파일 크기 : 파일의 바이트 수
파일 주소 : 주소 정보(39바이트)
마지막 접근 : 마지막으로 파일에 접근한 시각
마지막 수정 : 마지막으로 파일을 수정한 시각
아이노드 수정 : 마지막으로 아이노드를 수정한 시각
```