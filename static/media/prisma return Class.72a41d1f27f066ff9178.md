# prisma return Class

> dto type이 아니라 prisma type으로 리턴

```
async search(option: UserDTO): Promise<[User[], number]>{

}
```

```
plainToInstance(UserDTO, user)
```
