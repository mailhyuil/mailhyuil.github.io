# HandlerInterceptor

> DispatcherServlet이 컨트롤러를 호출하기 전과 후에 요청과 응답을 참조하거나 가공할 수 있는 일종의 필터
>
> > 서블릿 필터와 쓰입새가 유사
> >
> > > HttpServletRequest, HttpServletResponse, 컨트롤러 빈 오브젝트, 모델, 뷰, 예외등을 제공 받을 수 있다

## HandlerInterceptor interface

```
public interface HandlerInterceptor {

    default boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
        throws Exception {

        return true;
    }

    default void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
        @Nullable ModelAndView modelAndView) throws Exception {
    }

    default void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler,
        @Nullable Exception throws Exception {
    }
}
```

## Interceptor VS Servlet Filter

> 서블릿 필터는 클라이언트와 서블릿 사이에서 처리
>
> > 인터셉터는 서블릿과 컨트롤러 사이에서 처리
