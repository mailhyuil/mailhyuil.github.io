# Resources

## servlet-context.xml

```
<resources mapping="/static/**/*" location="/static/" />
<resources mapping="/upload/**/*" location="file:///tmp/upload/" />
<resources mapping="/node_modules/**/*" location="/node_modules/" />
```

## java-config

```
@Configuration
public class MvcConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(final ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/css/**")
                .addResourceLocations("classpath:/static/css/");
    }
}
```

## application.yml

```yml
spring:
  web:
    resources:
    static-locations: file:///c:/Temp/upload
  mvc:
    static-path-pattern: /upload/**
```
