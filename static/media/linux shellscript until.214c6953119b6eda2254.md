# linux shellscript until

## 문법

```sh
until [ condition ]
do
   Statements
done
```

## 사용

```sh
#!/bin/bash

a=0
until [ $a -ge 5 ]
do
    a=$(expr $a + 1)
    echo $a
done
```
