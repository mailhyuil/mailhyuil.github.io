# Spring Security - 스프링 시큐리티

## web.xml filter 추가

```xml
<filter>
    <filter-name>springSecurityFilterChain</filter-name>
    <filter-class>
        org.springframework.web.filter.DelegatingFilterProxy
    </filter-class>
</filter>

<filter-mapping>
    <filter-name>springSecurityFilterChain</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

## root-context 설정

```xml
<sec:http auto-config="true" use-expressions="true">

    <sec:csrf disabled="false"/>

    <sec:intercept-url pattern="/static/**" access="permitAll" />

    <sec:intercept-url pattern="/user/login" access="permitAll"/>
    <sec:intercept-url pattern="/user/join" access="permitAll"/>
    <sec:intercept-url pattern="/guest" access="permitAll"/>
    <sec:intercept-url pattern="/" access="permitAll"/>
    <sec:intercept-url pattern="/**" access="isAuthenticated()"/>

    <sec:form-login login-page="/user/login?error=LOGIN_NEED"
            login-processing-url="/user/login"
            username-parameter="username"
            password-parameter="password"/>

    <sec:logout
        invalidate-session="true"
        logout-success-url="/"
        delete-cookies="JSESSIONID"
    />
</sec:http>

<sec:authentication-manager>
    <sec:authentication-provider ref="authenticationProvider"/>
</sec:authentication-manager>

<!--
<sec:authentication-manager>
    <sec:authentication-provider>
        <sec:user-service>
            <sec:user name="callor"
                    password="{noop}!korea8080" authorities="ROLE_ADMIN"/>
        </sec:user-service>
    </sec:authentication-provider>
</sec:authentication-manager>
    -->
```

## UserVO

```java
public class UserVO implements UserDetails  {

	private static final long serialVersionUID = 1L;

	private String username;
	private String password;
	private boolean enabled;
	private boolean accountNonExpired;
	private boolean accountNonLocked;
	private boolean credentialsNonExpired;

	private Collection<? extends GrantedAuthority> authorities;

	private String email;
	private String tel;
	private String realname;
	private String nickname;
}
```

## AuthorityVO

```java
public class AuthorityVO {
	private long seq;
	private String username;
	private String authority;
}
```

## UserDetailsServiceImpl

```java
public class UserDetailsServiceImpl implements UserDetailsService{

	private final UserDao userDao;

	public UserDetailsServiceImpl(UserDao userDao) {
		this.userDao = userDao;
	}

	/*
	 * 로그인 한 사용자의 username 을 매개변수로 전달받아
	 * UserDao 를 통해 로그인한 사용자 정보를 DB 로 부터 가져온다
	 */
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserVO userVO = userDao.findById(username);

		if(userVO == null) {
			throw new UsernameNotFoundException(username + " : 회원가입을 먼저하세요");
		}

		List<AuthorityVO> authList = userDao.select_auths(username);

		List<GrantedAuthority> grantList = new ArrayList<>();

		for(AuthorityVO auth : authList) {
			grantList.add(new SimpleGrantedAuthority(auth.getAuthority()));
		}

		userVO.setAuthorities(grantList);

		return userVO;
	}

}
```

## AuthenticationProviderImpl

```java
public class AuthenticationProviderImpl implements AuthenticationProvider{

	@Autowired
	@Qualifier("userDetailsService")
	UserDetailsService userService;

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		String username = (String) authentication.getPrincipal();
		String password = (String) authentication.getCredentials();

		UserVO user = (UserVO) userService.loadUserByUsername(username);

		if(user == null) {
			throw new UsernameNotFoundException(username + "은 존재하지 않은 아이디입니다.");
		}

		if(user.getPassword().equals(password) == false) {
			throw new BadCredentialsException("비밀번호가 틀립니다");
		}

		UsernamePasswordAuthenticationToken
		token = new UsernamePasswordAuthenticationToken(user, password, user.getAuthorities());

		return token;
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return true;
	}

}
```

## spring-boot-security-config

### old version

```java
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("admin")
                .password("1234")
                .roles("admin_role");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.
                httpBasic()
                .and()
                .authorizeRequests()
                .antMatchers("/admin/**").hasRole("admin_role")
                .anyRequest().permitAll()
                .and()
                .formLogin();
    }

    @Bean
    public PasswordEncoder getPasswordEncoder(){
        return NoOpPasswordEncoder.getInstance();
    }
}
```

### new version

- HttpSecurity

```java
@Configuration
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests((authz) -> authz
                .anyRequest().authenticated()
            )
            .httpBasic(withDefaults());
        return http.build();
    }

}
```

- WebSecurityCustomizer

```java
@Configuration
public class SecurityConfiguration {

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().antMatchers("/ignore1", "/ignore2");
    }

}
```
