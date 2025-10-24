# spring Exception - 예외 처리

> 에러와 예외는 다르다, 에러는 시스템의 문제 프로그래머가 할 수 있는게 없다

> 예외의 종류 `체크예외 / 언체크예외(런타임예외)`

> 예외는 의미가 분명한(비즈니스적 의미가 담긴) 런타임예외로 만들어라 (예외 커스텀)

## exception 생성 RuntimeException 확장

```java
@ResponseStatus(value = HttpStatus.CONFLICT, reason = "A video with this name already exists")
public class VideoAlreadyExistsException extends RuntimeException{
}
```

## CustomException 만들기

1. CustomException Class

```java
@Getter
public class CustomException extends RuntimeException {

    private final ErrorCode errorCode;

    public CustomException(ErrorCode errorCode) {
        this.errorCode = errorCode;
    }

    public CustomException(ErrorCode errorCode, String message ) {
        super(message);
        this.errorCode = errorCode;
    }
}
```

2. ErrorCode Enum

```java
@Getter
@AllArgsConstructor
public enum ErrorCode {

    //공통 예외
    BAD_REQUEST_PARAM(HttpStatus.BAD_REQUEST, "잘못된 요청입니다."),
    BAD_REQUEST_VALIDATION(HttpStatus.BAD_REQUEST, "검증에 실패하였습니다."),

    //회원 예외
    UNAUTHORIZED_MEMBER(HttpStatus.UNAUTHORIZED, "해당 요청은 로그인이 필요합니다."),
    NOT_FOUND_MEMBER(HttpStatus.NOT_FOUND, "해당 유저를 찾을 수 없습니다."),
    EXIST_MEMBER(HttpStatus.BAD_REQUEST, "이미 등록된 유저입니다.");


    private final HttpStatus httpStatus;
    private final String detail;
}
```

---

## RestController 에서 발생하는 예외 잡아서 ResponseEntity에 담아서 반환하기

1. ErrorResponse class

```java
@Getter
@Builder
public class ErrorResponse {

    private final LocalDateTime timestamp = LocalDateTime.now();
    private final int status;
    private final String error;
    private final String code;
    private final String detail;
    private final String message;

    public static ResponseEntity<Object> toResponseEntity(CustomException e) {
        ErrorCode errorCode = e.getErrorCode();

        return ResponseEntity
                .status(errorCode.getHttpStatus())
                .body(
                        ErrorResponse.builder()
                        .status(errorCode.getHttpStatus().value())//httpStatus 코드
                        .error(errorCode.getHttpStatus().name())//httpStatus 이름
                        .code(errorCode.name())//errorCode 의 이름
                        .detail(errorCode.getDetail())//errorCode 상세
                        .message(e.getMessage())//에러 메시지
                        .build()
                );
    }

}
```

2. GlobalExceptionHandler class

```java
@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    //일반 에러
    @ExceptionHandler
    protected ResponseEntity<Object> handleCustomException(CustomException e) {
        return ErrorResponse.toResponseEntity(e);
    }

    //요청 바디 검증 실패
    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
                                                                  HttpHeaders headers,
                                                                  HttpStatus status,
                                                                  WebRequest request) {
        CustomException e = new CustomException(ErrorCode.BAD_REQUEST_VALIDATION, ex.getMessage());

        return ErrorResponse.toResponseEntity(e);
    }

    //모델 검증 실패
    @Override
    protected ResponseEntity<Object> handleBindException(BindException ex,
                                                         HttpHeaders headers,
                                                         HttpStatus status,
                                                         WebRequest request) {
        CustomException e = new CustomException(ErrorCode.BAD_REQUEST_VALIDATION, ex.getMessage());
        return ErrorResponse.toResponseEntity(e);
    }


}
```
