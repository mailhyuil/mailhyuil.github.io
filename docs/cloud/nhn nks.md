# nks 순서

1. NKS 생성
2. kubeconfig.yaml 다운로드 \> .kube/config로 덮어쓰기
3. `kubectl apply -f <file_path>`
4. kubectl expose deployment my-deployment --name=my-lb-service --port=80 --target-port=80 --type=LoadBalancer
