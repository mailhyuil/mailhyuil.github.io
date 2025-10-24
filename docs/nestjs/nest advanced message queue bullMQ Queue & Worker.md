# nest advanced message queue bullMQ Queue & Worker

## Queue

> 메세지가 대기하는 곳
>
> > redis

```ts
// bull
@OnQueue****()
@OnGlobalQueue****()

// bullmq
@QueueEventsListener('audio')
@OnQueueEvent('active')
@OnGlobalQueueEvent('active')
```

## Worker

> 메세지를 가져와서 처리하는 프로세스
>
> > nodejs

```ts
// bullmq
@OnWorkerEvent('completed')
```
