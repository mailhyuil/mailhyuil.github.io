# ELK beats filebeat config

> https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-reference-yml.html

# filebeat.yml

```yml
filebeat.inputs:
  - type: log
    enabled: false
    paths:
      - /var/log/*.log
  - type: filestream
    id: my-filestream-id
    enabled: false
    paths:
      - /var/log/*.log
output.elasticsearch:
  hosts: ["https://myEShost:9200"]
  username: "filebeat_writer"
  password: "YOUR_PASSWORD"
  index: "your-index-name-%{+yyyy.MM.dd}"
```

## 사용

```sh
./filebeat -e -c filebeat.yml -d "publish"
```
