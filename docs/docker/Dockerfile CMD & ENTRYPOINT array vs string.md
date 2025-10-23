# Dockerfile CMD & ENTRYPOINT array vs string

```dockerfile
# array
# 쉘을 사용하지 않음
# 빠르고 signal(SIGTERM, SIGINT)이 프로세스에 직접 전달된다.
# 쉘 문법 (&&, ||, ; 등)을 사용할 수 없다.
CMD ["node", "main.js"]

# string
# 쉘을 통해서 실행됨
# 느리고 signal(SIGTERM, SIGINT)이 쉘로 전달되기 때문에 프로세스가 무시할 수 있다.
# 쉘 문법 (&&, ||, ; 등)을 사용할 수 있다.
CMD "node main.js"
```
