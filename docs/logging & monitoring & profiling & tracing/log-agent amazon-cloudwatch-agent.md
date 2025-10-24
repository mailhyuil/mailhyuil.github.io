# log-agent amazon-cloudwatch-agent

## install

```sh
apt install amazon-cloudwatch-agent
```

## configuration

```json
{
  "collect_list": [
    {
      "file_path": "/opt/aws/amazon-cloudwatch-agent/logs/test.log",
      "log_group_name": "test.log",
      "log_stream_name": "test.log",
      "filters": [
        {
          "type": "exclude",
          "expression": "Firefox"
        },
        {
          "type": "include",
          "expression": "P(UT|OST)"
        }
      ]
    }
  ]
}
```
