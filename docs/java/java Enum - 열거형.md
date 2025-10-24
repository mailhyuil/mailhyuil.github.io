# java Enum - 열거형

```java
public enum Level {
	BASIC(1), SILVER(2), GOLD(3); // int를 안붙여주면 순서대로 0,1,2 하지만 붙여주는게 좋다
    // BASIC("베이직"), SILVER("실버"), GOLD("골드"); //String으로도 가능

	private final int value;

	Level(int value) {
		this.value = value;
	}

	public int getValue() {
		return value;
	}

	public static Level valueOf(int value) {
		switch (value) {
		case 1:
			return BASIC;
		case 2:
			return SILVER;
		case 3:
			return GOLD;
		default:
			throw new AssertionError("Unknown value: " + value);
		}
	}
}
```

```java
Level level = Level.BASIC; // 열거형 만들기 Level.BASIC == 열거타입 데이터

// getValue() 인덱스값 얻기
level.getValue();

Level.BASIC.getValue();
Level.SILVER.getValue();
Level.GOLD.getValue();
```

### 클래스를 이용한 방법 (열거형은 아님)

```java
public class Config {
	public static class SERVICE {
		public static final String MEMBER_V1 = "memberServiceV1";
		public static final String MEMBER_V2 = "memberServiceV2";
	}
}

// Level.SERVICE.MEMBER_V1 == "memberServiceV1"
```
