# php base type

```php
# string
$x = "Hello world!";
$y = "Hello $x";
# integer
$y = 5985;
# float
$z = 10.365;
# boolean
$a = true;
# array
$cars = array("Volvo","BMW","Toyota");
# object
class Car {
    function Car() {
        $this->model = "VW";
    }
}
$car = new Car();
# null
$x = null;
# resource
$myfile = fopen("webdictionary.txt", "r");
```
