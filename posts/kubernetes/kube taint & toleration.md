# kube taint & toleration

> node의 taint에는 임의의 string이 들어간다 (key=value:effect)
> pod의 toleration에는 임의의 string이 들어간다
>
> > node의 taint와 pod의 toleration의 string이 일치하면 pod가 스케줄링될 수 있다.
> > node에 taint가 있는데 pod의 toleration이 없거나 일치하지 않으면 스케줄링될 수 없다.
> > node에 taint가 없으면 pod의 toleration이 있어도 없어도 스케줄링될 수 있다.
