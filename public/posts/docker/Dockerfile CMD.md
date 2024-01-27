# Dockerfile CMD

## array

> array를 사용해야 signal(SIGTERM, SIGINT)을 프로세스에 전달할 수 있음

```dockerfile
CMD ["node", "main.js"]
```

## string

```dockerfile
CMD sh -c "npx prisma migrate deploy && node main.js"
```
