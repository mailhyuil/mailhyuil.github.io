# aws env aws-vault

> aws-vault는 99designs에서 개발한 오픈소스 도구
>
> > AWS 자격 증명을 시스템의 안전한 저장소에 암호화하여 보관
> >
> > > STS(Security Token Service)를 활용한 임시 자격 증명 자동 발급
> > >
> > > > 다양한 AWS 프로필 간 쉬운 전환 지원
> > > >
> > > > > macOS: Keychain, Windows: Credential Manager, Linux: Secret Service(Gnome Keyring, KWallet), 기타: Pass, 암호화된 파일를 통한 자격 증명 저장 지원

## install

```sh
brew install aws-vault
```

## usage

```sh
# 자격 증명 저장
aws-vault add <profile-name>
# 자격 증명 사용
aws-vault exec <profile-name> -- <command>
# S3 버킷 목록 조회
aws-vault exec myprofile -- aws s3 ls
# EC2 인스턴스 목록 확인
aws-vault exec production -- aws ec2 describe-instances
# AWS 콘솔 로그인 세션 시작
aws-vault login myprofile
```
