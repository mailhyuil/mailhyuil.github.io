# spring Gradle - 그레들

> Groovy 또는 Kotlin \*도메인 특화 언어(DSL)을 사용하여 작성
>
> > DSL 특정한 도메인을 적용하는데 특화된 컴퓨터 언어

## print hello

1. build.gradle 작성

```groovy
task hello{  // hello 라는 태스크 정의
    println "Hello Gradle World!!" // {} 안에 처리내용 기술
}
```

2. gradle 실행

```bash
gradle hello
```

## 빌드스크립트 구조

allprojects { } = 이 프로젝트와 각 하위 프로젝트를 구성합니다.
artifacts { } = 이 프로젝트에 대해 게시된 아티팩트를 구성합니다.
buildscript { } = 이 프로젝트에 대한 빌드 스크립트 클래스 경로를 구성합니다.
configurations { } = 이 프로젝트에 대한 종속성 구성을 구성합니다.
dependencies { } = 이 프로젝트에 대한 종속성을 구성합니다.
repositories { } = 이 프로젝트의 저장소를 구성합니다.
sourceSets { } = 이 프로젝트의 소스 세트를 구성합니다.
subprojects { } = 이 프로젝트의 하위 프로젝트를 구성합니다.
publishing { } = PublishingExtension 게시 플러그인에 의한 추가된 항목을 구성합니다.

## build.gradle

```
buildscript {
    // build.gradle에서 사용하는 전역변수 설정
    ext {
        springBootVersion = '2.1.7.RELEASE'
    }
    repositories {
        mavenCentral()
    }
    // 의존성으로 설정
    dependencies {
        // spring-boot-gradle-plugin:2.1.7.RELEASE를 의존성으로 받겠다. (스프링 부트 그레이들 플러그인의 2.1.7 RELEASE)
        classpath("org.springframework.boot:spring-boot-gradle-plugin:${springBootVersion}")
    }
}

plugins {
    id 'java'
    id 'eclipse'
    id 'org.springframework.boot' version '2.3.2.RELEASE'
    id 'io.spring.dependency-management' version '1.0.8.RELEASE'    // 스프링부트의 의존성들을 관리해주는 플러그인이여서 필수
}

group 'com.jojoldu.book'
version '1.0-SNAPSHOT'
sourceCompatibility = 1.8 // 자바소스를 컴파일시키는 역할, 버전 명시

repositories {
    mavenCentral() // 오픈 소스 라이브러리를 호스팅하는 저장소, sonatype.org이 운영하는 Maven Repository
}

dependencies {
    implementation('org.springframework.boot:spring-boot-starter-web')
    testImplementation('org.springframework.boot:spring-boot-starter-test')
}

test {
    useJUnitPlatform()
}
```
