# kube object Job

> 배치 작업을 실행하는 쿠버네티스 오브젝트
>
> > 계속 Running 상태를 유지시키는게 아니라, Job이라는 오브젝트를 통해 배치 작업을 실행하고 종료시키는 방식

## yaml

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: pi
spec:
  template:
    spec:
      containers:
        - name: pi
          image: perl:5.34.0
          command: ["perl", "-Mbignum=bpi", "-wle", "print bpi(2000)"]
      restartPolicy: Never # 필수! Job이 종료되면 다시 시작하지 않음 # onFailure 실패한 노드에서 다시 실행
  backoffLimit: 4 # 실패한 경우 재시도 횟수
```
