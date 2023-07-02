# terrafrom provisioner

> script 파일을 실행하기 위해 사용

```
provisioner "remote-exec" {
    scripts = [
        "${path.module}/files/update-apt.sh",
        "${path.module}/files/install-docker.sh",
        "${path.module}/files/install-docker-compose.sh",
        "${path.module}/files/install-kubectl.sh",
        "${path.module}/files/install-kustomize.sh",
        "${path.module}/files/install-minikube.sh",
    ]

    connection {
        type = "ssh"
        user = "ubuntu"
        host = aws_instance.demo.public_ip
    }
}
```
