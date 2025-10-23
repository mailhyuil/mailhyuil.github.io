# kube Client Server Architecture

> client deploy 또는 pod 생성
>
> server deploy 또는 pod 생성
>
> database deploy 또는 pod 생성
>
> > 각각 service 생성
> >
> > > base_url : service-name
> > >
> > > 또는
> > >
> > > base_url : service-name.namespace.svc.cluster.local
> > >
> > > > pod나 service의 port 그냥 그대로 쓰면됨 80, 3000, 5432
> > > >
> > > > configmap, secret은 부담없이 생성해서 edit으로 넣어줘라
