# loki json to logfmt

```txt
{job="myapp"} | json | line_format "message={{.message}}"
```
