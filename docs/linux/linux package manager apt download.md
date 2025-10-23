# linux package manager apt download

> deb 확장자

## usage

```sh
# download
apt reinstall --download-only -y
apt download $(apt-rdepends <package>|grep -v "^ ")

# insatll
dpkg -i *.deb
```
