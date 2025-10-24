# Dockerfile CMD & ENTRYPOINT

> ENTRYPOINT가 먼저 실행되고 CMD가 실행된다.
>
> > ENTRYPOINT가 있으면 CMD는 인자를 전달하는 역할이 된다.
> >
> > > CMD는 유저가 직접 입력한 CMD가 있으면 무시된다.

## ENTRYPOINT

> docker container 실행 시 내부적으로 실행되는 명령어를 지정함

```dockerfile
ENTRYPOINT ["node", "main.js"]
# docker run my_app node main.js
```

## CMD

> docker run 뒤에 붙는 명령어를 지정함
>
> 명령어를 직접 입력하면 CMD는 무시됨
>
> > e.g. docker run my_app \<CMD>

```dockerfile
# array
CMD ["node", "main.js"]
# docker run my_app node main.js
CMD ["--port", "8080"]
# docker run my_app --port 8080
```

## ENTRYPOINT + CMD

```dockerfile
ENTRYPOINT ["node", "main.js"]
CMD ["--port", "8080"]
# docker run my_app --port 8080
# 내부 실행 node main.js --port 8080
```
