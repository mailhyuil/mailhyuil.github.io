# typescript tsconfig compilerOptions moduleResolution

> module을 어떻게 resolve(해석)할지 지정한다.
>
> > 각 import가 어떤 모듈을 가리키는지 해석하는 과정을 의미
> >
> > > node로 되어있으면 node.js의 모듈 해석 방식을 따르고 classic으로 되어있으면 전통적인 모듈 해석 방식을 따른다.

```json
{
  "compilerOptions": {
    "moduleResolution": "node"
  }
}
```
