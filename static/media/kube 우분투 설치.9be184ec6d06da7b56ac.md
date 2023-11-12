# kubernetes 우분투 설치

```sh
#!/bin/bash
sudo su
apt-get update -y

apt-get install ca-certificates curl gnupg lsb-release apt-transport-https -y

mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
  | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

apt-get update -y
apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y

systemctl start docker
docker version

curl -LO "https://dl.k8s.io/release/v1.26.3/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
export PATH=${PATH}:/sbin:/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/local/bin/

kubectl version --output=yaml --client

apt-get install bash-completion -y

source /usr/share/bash-completion/bash_completion
source <(kubectl completion bash)

sudo echo "export PATH=:${PATH}:/sbin:/bin:/usr/sbin:/usr/bin:/usr/local/bin/:/usr/local/bin/" >> /root/.bashrc
sudo echo "source /usr/share/bash-completion/bash_completion" >> /root/.bashrc
sudo echo "source <(kubectl completion bash)" >> /root/.bashrc
```
