# spring 핸들러 예외 리졸버

## AnnotationMethodHandlerExceptionResolver

> @ExceptionHandler 어노테이션이 붙은 메소드를 찾아 예외처리를 맡겨줌

## ResponseStatusExceptionResolver

> @ResponseStatus의 HttpStatus에 정의된 값을 돌려준다

## DefaultHandlerExceptionResolver

> 다른 리졸버에서 처리하지 못한 예외를 다루는 마지막 리졸버
