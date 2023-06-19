# kubernetes service

> pod들을 외부에 노출 시킬 수 있는 단일 엔드포인트
>
> > 로드밸런서 역할
> >
> > > 내부 IP 통신 타입 : ClusterIP
> > >
> > > > 외부 IP 통신 타입 : NodePort, LoadBalancer

## type

### ClusterIP

> 내부 IP만 할당
>
> > 기본 Service 타입
> >
> > > 외부에서는 접근할 수 없는 내부 ip를 할당받는다
> > >
> > > > private 서비스들에 이용

```yaml
---
apiVersion: v1
kind: Service
metadata:
  name: order
  namespace: snackbar
  labels:
    service: order
    project: snackbar
spec:
  type: ClusterIP # type
  selector:
    service: order
    project: snackbar
  ports:
    - port: 80
      targetPort: 8080
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order
  namespace: snackbar
  labels:
    service: order
    project: snackbar
spec:
  replicas: 2
  selector:
    matchLabels:
      service: order
      project: snackbar
  template:
    metadata:
      labels:
        service: order
        project: snackbar
    spec:
      containers:
        - name: order
          image: hyuil/order:1.0
          ports:
            - containerPort: 8080
          resources:
            limits:
              memory: "64Mi"
              cpu: "50m"
---
```

### NodePort

> 외부 PORT를 할당
>
> > 트래픽만 받기 위한 용도
> >
> > > 포트만 여는 것과 같다
> > >
> > > > nodeIp:nodePort로 접근
> > > >
> > > > > 개발 및 테스트 환경에서 사용

```yaml
---
apiVersion: v1
kind: Service
metadata:
  name: order
  namespace: snackbar
  labels:
    service: order
    project: snackbar
spec:
  type: NodePort # type
  selector:
    service: order
    project: snackbar
  ports:
    - port: 80
      targetPort: 8080
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order
  namespace: snackbar
  labels:
    service: order
    project: snackbar
spec:
  replicas: 2
  selector:
    matchLabels:
      service: order
      project: snackbar
  template:
    metadata:
      labels:
        service: order
        project: snackbar
    spec:
      containers:
        - name: order
          image: hyuil/order:1.0
          ports:
            - containerPort: 8080
          resources:
            limits:
              memory: "64Mi"
              cpu: "50m"
---
```

### LoadBalancer

> 외부 IP를 할당 받는다 (클라우드 업체의 로드밸러서와 연동)
>
> > 클라우드 서비스에서 제공하는 LoadBalancer를 "프로비저닝" 즉 연동하여 사용
> >
> > > 프로덕션 환경에서 사용

```yaml
---
apiVersion: v1
kind: Service
metadata:
  name: order
  namespace: snackbar
  labels:
    service: order
    project: snackbar
spec:
  type: LoadBalancer # type
  selector:
    service: order
    project: snackbar
  ports:
    - port: 80
      targetPort: 8080
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order
  namespace: snackbar
  labels:
    service: order
    project: snackbar
spec:
  replicas: 2
  selector:
    matchLabels:
      service: order
      project: snackbar
  template:
    metadata:
      labels:
        service: order
        project: snackbar
    spec:
      containers:
        - name: order
          image: hyuil/order:1.0
          ports:
            - containerPort: 8080
          resources:
            limits:
              memory: "64Mi"
              cpu: "50m"
---
```

## expose

> 외부 IP를 할당 받으려면 expose 명령어를 사용해야 한다.
>
> > Kubernetes에서 사용되는 애플리케이션을 외부로 노출하는 명령어

```sh
# minikube
minikube service <service-name> --url

# Google cloud
# 포트 허용
# gcloud
```
