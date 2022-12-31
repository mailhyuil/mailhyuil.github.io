# Javamail

- pom.xl

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-mail</artifactId>
</dependency>
```

- application.properties

```
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=sangbaeku300@gmail.com
spring.mail.password=poobzwctplkhoakc
spring.mail.properties.mail.smtp.starttls.enable=true
spring.mail.properties.mail.smtp.auth=true
```

- pojo

```java
@Service
public class MailService {
    @Autowired
    private JavaMailSender javaMailSender;

    public void sendMail(){
        ArrayList<String> toUserList = new ArrayList<>();

        toUserList.add("mailhyuil@gmail.com");

        int toUserSize = toUserList.size();

        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();

        simpleMailMessage.setTo((String[]) toUserList.toArray(new String[toUserSize]));

        simpleMailMessage.setSubject("안녕하세요");

        simpleMailMessage.setText("반갑습니다");

        javaMailSender.send(simpleMailMessage);
    }
}
```
