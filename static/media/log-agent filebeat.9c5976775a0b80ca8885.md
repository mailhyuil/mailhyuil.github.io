# ELK beats filebeat

> 서버에서 로그 파일을 실시간으로 수집하고 Elasticsearch 또는 Logstash로 전송.
>
> 시스템 로그 파일 수집에 적합하다.
>
> > 경량 파일 전송 에이전트 (가볍고, 메모리 사용량이 적다. 따라서 간단한 로그 수집에 적합하다.)
> >
> > > logstash 대신 사용가능
> > >
> > > > filebeat.yaml 파일을 통해 input, output 설정 가능
> > > >
> > > > > 참고 : https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-reference-yml.html
