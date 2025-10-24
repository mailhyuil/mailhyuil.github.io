# spring AuditorAware

> AuditorAware 인터페이스를 상속시켜서 @EntityListeners가 들을 수 있게

> @CreatedBy @LastModifiedBy @CreatedDate @LastModifiedDate를 사용하기 위해 설정

1. auditing 켜기

```
@EnableJpaAuditing
or
<jpa:auditing auditor-aware-ref="yourAuditorAwareBean" />
```

2. AuditorAware 설정

```java
@Configuration
public class AwareAuditConfig implements AuditorAware<String> {

    @Override
    public Optional<String> getCurrentAuditor() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user;
        try {
             user = (User) authentication.getPrincipal();
        } catch (NullPointerException e) {
            return null;
        }
        return Optional.of(user.getUsername());
    }
}
```

3. AuditorAware Bean 등록

```java
@Bean
public AuditorAware<String> auditorAware(){
    return new AwareAuditConfig();
}
```
