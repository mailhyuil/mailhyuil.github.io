# npm global command not found

```sh
mkdir ~/.npm-global

npm config set prefix '~/.npm-global'

vi ~/.zshrc
export PATH=$PATH:~/.npm-global/bin
```
