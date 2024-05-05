# aws-cli s3

```sh
# s3 버킷 조회
aws s3 ls
aws s3 ls s3://bucket-name
aws s3 ls s3://bucket-name/example/

# s3 객체 삭제
aws s3 rm s3://bucket-name/example/filename.txt
aws s3 rm s3://bucket-name/example --recursive

# 객체 이동
aws s3 mv filename.txt s3://bucket-name
aws s3 mv s3://bucket-name .

# 객체 복사
aws s3 cp filename.txt s3://bucket-name
aws s3 cp s3://bucket-name .

# presigned url
aws s3 presign s3://DOC-EXAMPLE-BUCKET1/mydoc.txt --expires-in 604800
```
