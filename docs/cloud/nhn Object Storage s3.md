# nhn Object Storage s3

```sh
# 판교 리전
aws --endpoint-url=https://kr1-api-object-storage.nhncloudservice.com s3 ls s3://files

# bucket name은 반드시 케밥케이스를 써야한다.
aws --endpoint-url=https://kr1-api-object-storage.nhncloudservice.com s3 cp /home/ubuntu/file s3://db-basebackup
aws --endpoint-url=https://kr1-api-object-storage.nhncloudservice.com s3 cp /home/ubuntu/file s3://db-dump
aws --endpoint-url=https://kr1-api-object-storage.nhncloudservice.com s3 cp /home/ubuntu/file s3://db-archive
```
