# http preflight

- CORS(Cross-Origin Resource Sharing)는 브라우저에서 외부 도메인으로 리소스를 요청할 때 발생하는 보안 문제를 해결하기 위한 표준 규약이다.
- Preflight란 서버로 바로 요청을 보내는 Simple Request와는 다르게, 지금 보내는 요청이 유효한지를 확인하기 위해 OPTIONS 메서드로 예비 요청을 보내는 것이다.
- 만약 preflight 없이 거대한 데이터를 보냈는데 서버가 거부한다면 리소스만 낭비한 꼴이 되기에 미리 확인하는 것이다.
