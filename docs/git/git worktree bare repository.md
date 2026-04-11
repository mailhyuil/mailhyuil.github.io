# git worktree bare repository

```sh
mkdir new-project && cd new-project
git clone --bare https://...../repo.git
git -C .bare worktree add ../main main
```
