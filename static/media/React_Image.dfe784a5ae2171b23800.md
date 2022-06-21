# React에서 Local Image 불러오기

## public 폴더 사용
`<img src="/img/file.jpg"/>`
## import 사용
```
import file from './file.jpg';
<img src={file} />
```
## require 사용
* src 폴더에서 사용 가능
```
<img src={require("./file.jpg").default}/>
```
---