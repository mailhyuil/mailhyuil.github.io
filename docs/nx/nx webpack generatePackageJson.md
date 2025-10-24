# nx webpack generatePackageJson

> server 를 빌드 할때 package.json만들기
>
> > package.json이 생성되면 npm i를 통해서 tslib를 설치

```json
"build": {
  "options": {
    "generatePackageJson": true
  },
},
```
