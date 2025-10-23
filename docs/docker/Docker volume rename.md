# Docker volume rename

```sh
docker volume create --name new_volume
docker run --rm -it -v old_volume:/from -v new_volume:/to alpine ash -c 'cd /from ; cp -av . /to'
docker volume rm old_volume
```
