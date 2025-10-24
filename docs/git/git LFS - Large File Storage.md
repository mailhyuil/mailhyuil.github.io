# git LFS - Large File Storage

> 큰 파일들을 Git으로 관리할 때 사용하는 확장 기능
>
> > 이미지, 비디오, 3D 모델, 큰 데이터셋 같은 바이너리 파일들을 효율적으로 관리
> >
> > > 실제 파일은 별도 서버에 저장하고, Git에는 포인터만 저장
> > >
> > > > 레포지토리 크기를 작게 유지

## install

```sh
# macOS
brew install git-lfs
git lfs install
# Windows
choco install git-lfs
git lfs install
# Linux (Debian/Ubuntu)
curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh |
sudo bash
sudo apt-get install git-lfs
git lfs install
```
