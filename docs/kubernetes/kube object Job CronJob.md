# kube object Job CronJob

> 배치 작업을 실행하는 쿠버네티스 오브젝트
>
> > Cron으로 주기적으로 실행되는 Job
> >
> > > Job 오브젝트를 감싸고있다.

## yaml

```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: hello
spec:
  schedule: "* * * * *"
  jobTemplate: # Job 오브젝트를 생성하는 템플릿
    spec:
      template:
        spec:
          containers:
            - name: hello
              image: busybox:1.28
              imagePullPolicy: IfNotPresent
              command:
                - /bin/sh
                - -c
                - date; echo Hello from the Kubernetes cluster
          restartPolicy: OnFailure
```
