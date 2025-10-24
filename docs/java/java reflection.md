# java reflection

> 구체적인 클래스 타입을 알지 못해도 그 클래스의 메소드, 타입, 변수에 접근할 수 있도록 해주는 자바 API
> 클래스의 메타정보 객체를 사용하여 메소드나 변수의 메타 객체를 불러와 객체를 전달하여 접근
>
> > java.lang.reflection
> >
> > > (e.g. intelliJ의 자동완성, 스프링 어노테이션)

## 메소드를 호출하는 두가지 방식

- 1

```
String name = "name";
int length = name.length();
```

- 2
  > reflection 구현 방법

```
String name = "name";
Method lengthMethod = String.class.getMethod("length");
int length = (int) lengthMethod.invoke(name);
System.out.println(length);
```
