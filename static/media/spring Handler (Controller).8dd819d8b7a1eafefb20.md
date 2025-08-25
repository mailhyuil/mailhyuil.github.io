# Handler (Controller)

## 스프링이 지원하는 Controller & HandlerAdapter 4가지

1. Servlet & SimpleServletHandlerAdapter
   > 기존에 서블릿으로 개발된 코드를 스프링 애플리케이션에 가져와 사용할 때
2. HttpRequestHandler & HttpRequestHandlerAdapter
   > 모델과 뷰 개념이 없는 HTTP 기반의 RMI와 같은 로우레벨 서비스를 개발할 때
3. Controller & SimpleControllerHandlerAdapter
   > Contoller Interface를 구현한 컨트롤러를 사용할 때
4. \*AnnotationMethodHandlerAdapter
   > 지원하는 컨트롤러의 타입이 정해져 있지 않다 (컨트롤러 타입 제한이 없다)
   >
   > > 애노테이션, 메소드 이름, 파라미터, 리턴타입에 대한 규칙을 분석하여 컨트롤러 선별 및 호출
