# shell script if

```sh
#!/bin/bash

for i in A B C D E
do echo $i
done

list="A B C D E"
for i in $list
do echo $i
done

array=(1 3 5 7 9)
for i in "${array[@]}"
do echo $i
done

for i in {1..100..1}
do echo $i
done

for ((i=0 ; i < 5 ; i++));
do echo $i
done
```
