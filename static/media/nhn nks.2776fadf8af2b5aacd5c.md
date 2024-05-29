## nks 순서

> NKS 생성
> kubeconfig.yaml 다운로드 > .kube/config로 덮어쓰기
> kubectl apply -f <file_path>
> kubectl expose deployment my-deployment --name=my-lb-service --port=80 --target-port=80 --type=LoadBalancer
