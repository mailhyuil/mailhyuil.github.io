# linux make

> 스크립트 자동화 도구 (package.json의 scripts와 유사)
>
> > 과거에 소프트웨어를 빌드하는데 사용되는 빌드 도구
> >
> > makefile을 통해 빌드 과정을 기술
> >
> > make를 사용하여 Makefile을 읽어서 빌드 과정을 자동으로 수행
> >
> > > 특히 C 및 C++ 프로그램을 컴파일하고 라이브러리를 빌드하는 데 많이 활용

## 설치

```sh
apt install make -y

make <command>
```

## Makefile

```Makefile
project_name = my_project

image_name = gofiber:latest

help: ## This help dialog.
	@grep -F -h "##" $(MAKEFILE_LIST) | grep -F -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

run-local: ## Run the app locally
	go run app.go

requirements: ## Generate go.mod & go.sum files
	go mod tidy

clean-packages: ## Clean packages
	go clean -modcache

up: ## Run the project in a local container
	make up-silent
	make shell

build: ## Generate docker image
	docker build -t $(image_name) .

build-no-cache: ## Generate docker image with no cache
	docker build --no-cache -t $(image_name) .

up-silent: ## Run local container in background
	make delete-container-if-exist
	docker run -d -p 3000:3000 --name $(project_name) $(image_name) ./app

up-silent-prefork: ## Run local container in background with prefork
	make delete-container-if-exist
	docker run -d -p 3000:3000 --name $(project_name) $(image_name) ./app -prod

delete-container-if-exist: ## Delete container if it exists
	docker stop $(project_name) || true && docker rm $(project_name) || true

shell: ## Run interactive shell in the container
	docker exec -it $(project_name) /bin/sh

stop: ## Stop the container
	docker stop $(project_name)

start: ## Start the container
	docker start $(project_name)
```
