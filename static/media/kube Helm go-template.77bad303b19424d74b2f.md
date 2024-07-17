# kubernetes go-template

> values.yaml에 설정값 추가
>
> > templates/\*에서 설정값 사용

## templates

```go
{ .Values.pod.image }
```

## values.yaml

```yaml
app:
  name: myapp
pod:
  image: nginx
```
