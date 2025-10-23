# c++ 생성 & 복사 & 이동

## 성능

```sh
# 이동 생성자가 성능이 가장 좋다.
이동 생성자 <- 복사 생성자 <- 이동 대입 연산자 (=) <- 복사 대입 연산자 (=)
```

## 이동 생성자

```cpp
class A {
public:
    A(A&& a) {
        // 이동 생성자
    }
};
```

## 복사 생성자

```cpp
class A {
public:
    A(const A& a) {
        // 복사 생성자
    }
};
```

## 이동 대입 연산자

```cpp
class A {
public:
    A& operator=(A&& a) {
        // 이동 대입 연산자
    }
};
```

## 복사 대입 연산자

```cpp
class A {
public:
    A& operator=(const A& a) {
        // 복사 대입 연산자
    }
};
```
