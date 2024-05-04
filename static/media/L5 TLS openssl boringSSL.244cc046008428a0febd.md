# openssl boringssl

## install

```sh
apt install build-essential cmake ninja-build git
git clone "https://boringssl.googlesource.com/boringssl"
cmake -GNinja -B build
ninja -C build
```

## 사용

```sh
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
```
