# ant style pattern & wildcards

> 사용할 수 있는지 여부는 공식문서 확인

## ?

> 1개의 문자와 매칭 (matches single character)

## \*

> : 0개 이상의 문자와 매칭 (matches zero or more characters)

## \*\*

> : 0개 이상의 디렉토리와 파일 매칭 (matches all files / directories)

## {a, b, c}

> : 중괄호 안의 문자열 중 하나와 매칭 (matches a character range or a specific set of characters)

```
{**/\*.html,**/\*.js} : html, js 파일 매칭
```
