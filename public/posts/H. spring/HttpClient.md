# HttpClient

## HttpClient Dependency 추가 후 진행

- GET

```java
	@RequestMapping(value = "/httpClient", method = RequestMethod.GET)
	public void httpClient() {
		try {
			HttpClient client = HttpClientBuilder.create().build();// HttpClient 생성

			HttpGet getRequest = new HttpGet("https://yts.mx/api/v2/movie_details.json?movie_id=42563"); // GET 메소드 URL
																											// 생성

// 			getRequest.addHeader("x-api-key", RestTestCommon.API_KEY); // KEY 입력

			HttpResponse response = client.execute(getRequest); // Response 출력

			if (response.getStatusLine().getStatusCode() == 200) {
				ResponseHandler<String> handler = new BasicResponseHandler();
				String body = handler.handleResponse(response);
				System.out.println("=".repeat(50));
				System.out.println(body);
				System.out.println("=".repeat(50));
			} else {
				System.out.println("response is error : " + response.getStatusLine().getStatusCode());
			}

		} catch (Exception e) {
			System.err.println(e.toString());
		}
	}
```

- POST

```java
	@RequestMapping(value = "/httpClient", method = RequestMethod.POST)
	public void httpClient(String requestURL, String jsonMessage) {
		try {
			HttpClient client = HttpClientBuilder.create().build(); // HttpClient 생성
			HttpPost postRequest = new HttpPost(requestURL); // POST 메소드 URL 새성
			postRequest.setHeader("Accept", "application/json");
			postRequest.setHeader("Connection", "keep-alive");
			postRequest.setHeader("Content-Type", "application/json");
//			postRequest.addHeader("x-api-key", RestTestCommon.API_KEY); // KEY 입력
// 			postRequest.addHeader("Authorization", token); // token 이용시
			postRequest.setEntity(new StringEntity(jsonMessage)); // json 메시지 입력
			HttpResponse response = client.execute(postRequest); // Response 출력
			if (response.getStatusLine().getStatusCode() == 200) {
				ResponseHandler<String> handler = new BasicResponseHandler();
				String body = handler.handleResponse(response);
				System.out.println(body);
			} else {
				System.out.println("response is error : " + response.getStatusLine().getStatusCode());
			}
		} catch (Exception e) {
			System.err.println(e.toString());
		}
	}
```
