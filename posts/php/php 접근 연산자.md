# php 접근 연산자

> -> 를 사용

```php
class Person {
    public $name;
    public $age;
}

$person = new Person();

$person->name = 'John Doe';

echo $person->name; // John Doe
```