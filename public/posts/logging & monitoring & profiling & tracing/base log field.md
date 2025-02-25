# base log field

```txt
# 공통
level
message
timestamp
...

# http 관련
client_ip
user_agent
request_method
request_uri
request_body
request_header
request_query
response_status
response_body
response_time
...

# error & debug
error_message
stack_trace
error_code
module_name
...

# user 관련
user_id
user_role
auth_method (jwt, oauth, api key)
...

# microservice 관련
trace_id
span_id
parent_span_id
service_name
service_version
...

# 시스템 환경
host_ip
hostname
env
memory_usage
cpu_usage
...
```
