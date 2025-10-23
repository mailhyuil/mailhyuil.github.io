# nodejs webcontainer

> web browser에서 nodejs를 사용할 수 있는 컨테이너

## install

```sh
npm i @webcontainer/api
```

## usage

```ts
import { WebContainer } from "@webcontainer/api";

// Call only once
const webcontainerInstance = await WebContainer.boot();
await webcontainerInstance.mount(projectFiles);

async function startDevServer() {
  const installProcess = await webcontainerInstance.spawn("npm", ["install"]);

  const installExitCode = await installProcess.exit;

  if (installExitCode !== 0) {
    throw new Error("Unable to run npm install");
  }
  webcontainerInstance.on("server-ready", (port, url) => (iframeEl.src = url));
  // `npm run dev`
  await webcontainerInstance.spawn("npm", ["run", "dev"]);
}
```
