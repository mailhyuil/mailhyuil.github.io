# spring RestAPI

> HttpEntity
> RequestEntity: HttpEntity + URI, Method
> ResponseEntity: HttpEntity + Status(상태코드)

## URL 읽기

```java
public String getAPI() {
	URL url = null;
	HttpURLConnection httpCon = null;

	try {
		url = new URL("https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year/");

		httpCon = (HttpURLConnection) url.openConnection();
		httpCon.setRequestMethod("GET");
		int resCode = httpCon.getResponseCode();

		InputStreamReader is = null;
		BufferedReader buffer = null;

		if(resCode == 200) { // 데이터를 받아올 통로를 연결하기
			is = new InputStreamReader(httpCon.getInputStream());
		} else {
			// 만약 200코드가 아니면
			// 오류메시지를 받을 통로를 연결하기
			is = new InputStreamReader(httpCon.getErrorStream());
		}

		buffer = new BufferedReader(is);
		String retString = "";

		while(true) {
			String line = buffer.readLine();
			if(line == null) break;
			retString += line;
		}
		return retString;
	} catch (MalformedURLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
		return null;
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
		return null;
	}
}
```

## Jackson

- Jackson-bind 사용시 @ResponseBody는 json으로 리턴

- ObjectMapper는 API의 데이터를 VO에 매핑시켜주는 역할을 한다

* 선언하지 않은 Property 무시하기

```
@JsonIgnoreProperties(ignoreUnknown = true)
```

- ObjectMapper

```
ObjectMapper mapper = new ObjectMapper(); // Json to VO, String to VO, String to Json ...

mapper.getFactory().configure(JsonWriteFeature.ESCAPE_NON_ASCII.mappedFeature(), true); // UTF-8로 인코딩

//mapper.writeValueAsString (VO) // VO to JSON

//mapper.readValue(Json, VO.class); // JSON to VO
```

## RestTemplate

- restTemplate은 API의 데이터를 VO에 매핑시켜주는 역할
- Json데이터가 중첩되어 있을 시 Parent 클래스를 만들어 데이터를 추출한다

```java
HttpHeaders headers = new HttpHeaders();

headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

HttpEntity<String> entity = new HttpEntity<String>("parameter", headers);
// 헤더에 넣은 데이터를 엔티티로 변환 * 헤더에 넣을 데이터가 없다면 null로 설정

RestTemplate restTemplate  = new RestTemplate();

ResponseEntity<MovieParent<MoviesVO>> respEntity =
restTemplate.exchange(
		uri,
		HttpMethod.GET,
		entity,
		new ParameterizedTypeReference<MovieParent<MoviesVO>>() {});

model.addAttribute("VO", respEntity.getBody().data.getMovie());
```

- VO 객체

```java
public class MoviesVO {
	private int id;
	private Object movie;
	private List<String> genres;
}
```

- Parent 객체

```java
public class MovieParent<VO> {
	public String status;
	public String status_message;
	public VO data;
}
```

## RestTemplate 302 응답값 받기

> 302 : redirect 상태 // restTemplate은 기본으로 302시 redirect된 응답값을 보내는게 아니라 redirect 정보를 받는다

- Apache HttpClient dependency 추가

```xml
<!-- https://mvnrepository.com/artifact/org.apache.httpcomponents/httpclient -->
<dependency>
    <groupId>org.apache.httpcomponents</groupId>
    <artifactId>httpclient</artifactId>
    <version>4.5.13</version>
</dependency>
```

- Redirect 전략 변경

```java
RestTemplate restTemplate = new RestTemplate();

HttpComponentsClientHttpRequestFactory factory = new HttpComponentsClientHttpRequestFactory();

CloseableHttpClient httpClient = HttpClientBuilder.create()
        .setRedirectStrategy(new LaxRedirectStrategy())
        .build();

factory.setHttpClient(httpClient);

restTemplate.setRequestFactory(factory);
```

## WebClient

```java
WebClient webClient = WebClient.create("https://api.openweathermap.org/data/2.5/weather");

WeatherRoot weather = webClient.get().uri("?lat=37.7278127"
        + "&lon=127.5112565"
        + "&appid=945a820a0cfd85e6354d9c2a9a628ba9")
        .accept(MediaType.APPLICATION_JSON)
        .exchange().flatMap(res -> {
            return res.bodyToMono(WeatherRoot.class);
        }).block();
```
