# 스프링 시큐리티(Spring Security)

- web.xml filter 추가
```
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
- root-context 설정
```
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
- UserVO
```
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
- AuthorityVO
```
public class AuthorityVO {
	private long seq;
	private String username;
	private String authority;
}
```

- UserDetailsServiceImpl
```
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

		// 로그인 한 사용자의 username 이 table 에 없으면
		if(userVO == null) {
			throw new UsernameNotFoundException(username + " : 회원가입을 먼저하세요");
		}

		return userVO;
	}

}
```