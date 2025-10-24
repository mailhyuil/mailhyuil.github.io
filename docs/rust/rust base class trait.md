# rust base class trait

> 인터페이스와 비슷하다.

## 구현

> impl trait for struct
>
> > implements와 비슷

```rs
struct User {
    name: String,
    email: String,
}

// User안에 fmt::Display 메소드를 구현
impl fmt::Display for User { // trait for struct === class User implements fmt::Display
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result { // User를 참조하는 값 넣기 &self
        write!(f, "이름 : {} 이메일 : {}", self.name, self.email) // write!(formatter, "{}", self.필드)
    }
}

let new_user = User {
    name: "Benjamin Lannon".to_string(),
    email: "email@example.com".to_string()
};

println!("{}", new_user);
```
