# linux package rsync

## usage

```sh
rsync -avz -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --progress /root/bigfile.txt 198.211.117.129:/root/
rsync -avz -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --progress /root/bigfile.txt username@198.211.117.129:/
```
