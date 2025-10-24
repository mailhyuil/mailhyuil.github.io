# log-agent filebeat config

> https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-reference-yml.html

# filebeat.yml

> chmod 400 filebeat.yml (read-only)

```yml
filebeat.inputs:
  - type: log
    enabled: true
    paths:
      - /var/log/*.log
  - type: filestream
    id: my-filestream-id
    enabled: true
    paths:
      - /var/log/*.log

output.elasticsearch:
  hosts: ["https://myEShost:9200"]
  username: "filebeat_writer"
  password: "YOUR_PASSWORD"
  index: "your-index-name-%{+yyyy.MM.dd}"

output.console:
  pretty: true

output.file:
  path: "/tmp/filebeat"
  filename: filebeat
  #rotate_every_kb: 10000
  #number_of_files: 7
  #permissions: 0600
  #rotate_on_startup: true
```

## usage

```sh
./filebeat -e -c filebeat.yml -d "publish"
```
