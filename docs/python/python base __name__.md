# python base __name__

> 파이썬에서 \_\_name\_\_은 현재 실행 중인 파일의 이름을 나타내는 특별한 변수
>
> > 직접 실행한 경우 (\_\_name\_\_ == \_\_main\_\_)
> >
> > 다른 파일에서 import한 경우 (\_\_name\_\_ == 해당 파일의 이름)

## 다른 파일에서 import하는 경우 실행 방지

> node.js의 `require.main === module` 또는 isMainThread와 비슷한 역할

```py
if __name__ == '__main__':
    app.run()
```
