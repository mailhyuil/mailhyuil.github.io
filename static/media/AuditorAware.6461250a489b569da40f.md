# AuditorAware
> AuditorAware 인터페이스를 상속시켜서 @EntityListeners가 들을 수 있게
```
@Configuration
@EnableJpaAuditing
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