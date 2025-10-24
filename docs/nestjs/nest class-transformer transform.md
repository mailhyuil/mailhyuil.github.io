# nest class-transformer transform

> @Expose()를 해야 노출된다.

```ts
export class UserDTO {
  id: string;
  name: string;
  studentProfile: string;
  teacherProfile: string;
  createdAt: Date;
  updatedAt: Date;
  @Expose()
  @Transform(({ obj }) => {
    if (obj.studentProfile) {
      return obj.studentProfile.name;
    }
    if (obj.teacherProfile) {
      return obj.teacherProfile.name;
    }
    return obj.name;
  })
  profileName: string;
}
```
