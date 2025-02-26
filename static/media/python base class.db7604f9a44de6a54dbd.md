# python class

> 첫번째 인자로 self를 넣어줘야함

```py
class Name:
    def __init__(self, x, y): # 생성자
        self.x = 1
        self.y = 2

    def __del__(self): # 소멸자
        print('deleted!')

    def hi(self):
        print('hi')
```

## static, class, abstract method

```py
@staticmethod
def method(self):
    pass

@classmethod
def method(cls):
    pass

@abstractmethod
def method(self):
```

## getter, setter

```py
@property
def get_a(self):
    return self.a

@get_a.setter
def set_a(self, a):
    self.a = a
```

## 상속

```py
class B(A)
class C(A, B)
```
