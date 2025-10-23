# kali-linux

> Network services disabled by default
>
> > Custom Linux kernel: Kali Linux uses an upstream kernel, patched for wireless injection.
> >
> > > A minimal and trusted set of repositories

## docker install

```sh
docker run --name kali -p 22:22 -it kalilinux/kali-rolling

apt update && apt -y install kali-linux-headless
```
