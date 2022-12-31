# ActiveMQ

- apache-ActiveMQ 설치

- ActiveMQQueue, ActiveMQConnectionFactory, JMSTemplate

  > spring.activemq.broker-url = tcp://localhost:61616
  > jmsTemplate.convertAndSend(queue, json) -> ActiveMQ -> @JMSListener(destination="queue")

- application.yml

```yml
spring:
  activemq:
    broker-url: tcp://localhost:61616
```

## config

```java
@Configuration
@EnableJms
public class ActiveMQConfig {

    @Value("${spring.activemq.broker-url}")
    private String brokerUrl;

    @Bean
    public Queue queue() {
        return new ActiveMQQueue("sb-queue");
    }

    @Bean
    public ActiveMQConnectionFactory activeMQConnectionFactory() {
        ActiveMQConnectionFactory activeMQConnectionFactory = new ActiveMQConnectionFactory();
        activeMQConnectionFactory.setBrokerURL(brokerUrl);
        return activeMQConnectionFactory;
    }

    @Bean
    public JmsTemplate jmsTemplate() {
        return new JmsTemplate(activeMQConnectionFactory());
    }

}
```

### producer

```java
@RestController
@RequestMapping("/produce")
public class Producer {

    @Autowired
    private JmsTemplate jmsTemplate;

    @Autowired
    private Queue queue;

    @PostMapping("/message")
    public void sendMessage(@RequestBody Student student) {

        try {
            ObjectMapper mapper = new ObjectMapper();
            String studentAsJson = mapper.writeValueAsString(student);

            jmsTemplate.convertAndSend(queue, studentAsJson); // ActiveMQ에 message 보내기
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### consumer

```java
@Component
public class Consumer {

    private static final Logger logger = LoggerFactory.getLogger(Consumer.class);

    @JmsListener(destination = "sb-queue") // ActiveMQ가 보낸 메세지를 받을 메소드
    public void consumeMessage(String message) {
        logger.info("Message received from activemq queue---" + message);
    }
}
```
