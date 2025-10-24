# java Regex - 정규식

```java
String str = "asdfasdf010-0000-0000sdfdfsd";

Pattern pattern = Pattern.compile("\\d\\d\\d-\\d\\d\\d\\d-\\d\\d\\d\\d");
Matcher matcher = pattern.matcher(str);

String matchedRegex = "";

if(matcher.find()) {
	matchedRegex = matcher.group(0).trim();
}

System.out.println(matchedRegex);
```
