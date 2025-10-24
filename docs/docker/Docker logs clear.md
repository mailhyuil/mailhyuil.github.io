# Docker logs clear

```sh
echo "" > $(docker inspect --format='{{.LogPath}}' <container_name_or_id>)
```
