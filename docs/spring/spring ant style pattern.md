# ant style pattern & wildcards

> apache ant에서 사용하는 파일 매칭 패턴
>
> > unix의 glob 패턴과 유사하지만 다른 부분이 있음

## ?

> 1개의 문자와 매칭 (matches single character)

## \*

> : 0개 이상의 문자와 매칭 (matches zero or more characters)

## \*\*

> : 0개 이상의 디렉토리와 파일 매칭 (matches all files / directories)

## \{a, b, c\}

> : 중괄호 안의 문자열 중 하나와 매칭 (matches a character range or a specific set of characters)

```txt
{**/\*.html,**/\*.js} : html, js 파일 매칭
```
