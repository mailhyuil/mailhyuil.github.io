# aws vpc openVPN

> ami marketplace에서 openvpn 선택
>
> > public subnet에 생성
> >
> > > 보안그룹은 자동으로 생성된다.

1. openvpnas 유저로 ssh 접속
   > 마지막에 admin 패스워드 넣기 대문자 포함
2. admin 패스로 접속
   > id openvpn
   >
   > > password init 시 생성
3. user 생성 및 패스워드 설정
4. user로 로그인
5. 로컬에 openvpn 설치
6. public ip로 connect
7. 이제 사설 ip로 접속 가능!
