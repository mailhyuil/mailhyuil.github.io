# Spring basic

## ApplicationContext (IOC Container)

> ApplicationContext = Container = Spring
>
> > BeanFactory를 상속

- 종류
  - StaticApplicationContext
  - GenericApplicationContext
  - GenericXmlApplicationContext
    ![](/img/ApplicationContext.jpg)
  - `WebApplicationContext`
    ![](/img/WebApplicationContext.jpg)

## POJO

> 구성(composition)을 사용해서 주입받음

## Config (설정 메타 데이터)

> Bean을 생성하기 위한 설정파일
>
> > BeanDefinition 인터페이스로 표현
> >
> > > BeanDefinitionReader로 읽는다
