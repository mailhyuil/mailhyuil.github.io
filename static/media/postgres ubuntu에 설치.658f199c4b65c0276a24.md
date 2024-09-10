# postgres ubuntu에 설치

```sh
apt update -y && apt upgrade -y
apt install postgresql
su postgres

# postgresql.conf 설정
cd /var/lib/postgresql/data

# postgresql 시작
systemctl enable postgresql --now

psql
```
