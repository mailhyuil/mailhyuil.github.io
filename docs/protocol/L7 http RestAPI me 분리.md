# L7 http RestAPI me 분리

> 자기 자신을 수정/삭제/조회하는 endpoint와
>
> > 다른 유저를 수정/삭제/조회하는 endpoint는 분리
> >
> > > 모든 유저가 조회할 수 있다면 분리하지 않는다.

## endpoint

> me, myself, current 등의 이름 가능

```sh
/users/me
/users/:id
```

## me 분리

```ts
@Auth(Role.MEMBER)
@Patch('members/me')
@ApiOperation({
  summary: 'Member User 자신의 수정',
})
@ApiBody({ type: UpdateMemberDTO })
@ApiOkResponse({ type: UserDTO })
async updateMe(@Body() body: UpdateMemberDTO, @GetUser() user: User) {
  return await this.userService.updateMe(body, user.id);
}

@Auth(Role.ADMIN)
@Patch('members/:id')
@ApiOperation({
  summary: 'Member User 수정',
})
@ApiBody({ type: UpdateMemberDTO })
@ApiOkResponse({ type: UserDTO })
async update(@Param('id') id: string, @Body() body: UpdateMemberDTO) {
  return await this.userService.update(id, body);
}
```
