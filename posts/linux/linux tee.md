# tee

> \> 와 기능이 같지만 \>를 사용하면 sudo 권한을 이어 받을 수 없다
>
> > cat <file_name> | sudo tee <new_file_name> 방식으로 sudo 권한을 사용할 수 있다.

```sh
cat <file_name> | tee <new_file_name>
echo 'hello' | tee <new_file_name>
```
