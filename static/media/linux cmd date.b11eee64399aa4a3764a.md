# linux cmd date

```sh
date # Thu Jun 20 12:21:25 KST 2021
# format : 형식을 지정하기 위한 문자열 '+ %m/%d/%y %H:%M' 과 같이 사용할 경우 '11/11/20 17:11'과 같이 출력 됨.
date [option] [+FORMAT]

# mmddhhmm : 월, 일, 시간, 분을 나타내는 8자리 숫자로 super user가 시스템 날짜와 시간을 변경할 때 사용
# yy : 년도의 마지막 두자리로 super user가 시스템 날짜와 시간을 변경할 때 사용
date [option] [MMDDhhmm[YY]]
```
