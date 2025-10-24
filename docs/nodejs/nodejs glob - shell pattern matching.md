# nodejs glob - shell pattern matching

> Shell Pattern Matching 기능을 사용해서 파일을 읽어올 수 있는 모듈
>
> > Shell Pattern Matching: `*`, `?`, `[]`, `{}`

## install

```sh
npm i glob
```

## usage

```js
// load using import
import { glob, globSync, globStream, globStreamSync, Glob } from "glob";
// or using commonjs, that's fine, too
const { glob, globSync, globStream, globStreamSync, Glob } = require("glob");

// the main glob() and globSync() resolve/return array of filenames

// all js files, but don't look in node_modules
const jsfiles = await glob("**/*.js", { ignore: "node_modules/**" });

// pass in a signal to cancel the glob walk
const stopAfter100ms = await glob("**/*.css", {
  signal: AbortSignal.timeout(100),
});

// multiple patterns supported as well
const images = await glob(["css/*.{png,jpeg}", "public/*.{png,jpeg}"]);

// but of course you can do that with the glob pattern also
// the sync function is the same, just returns a string[] instead
// of Promise<string[]>
const imagesAlt = globSync("{css,public}/*.{png,jpeg}");

// you can also stream them, this is a Minipass stream
const filesStream = globStream(["**/*.dat", "logs/**/*.log"]);

// construct a Glob object if you wanna do it that way, which
// allows for much faster walks if you have to look in the same
// folder multiple times.
const g = new Glob("**/foo", {});
// glob objects are async iterators, can also do globIterate() or
// g.iterate(), same deal
for await (const file of g) {
  console.log("found a foo file:", file);
}
// pass a glob as the glob options to reuse its settings and caches
const g2 = new Glob("**/bar", g);
// sync iteration works as well
for (const file of g2) {
  console.log("found a bar file:", file);
}

// you can also pass withFileTypes: true to get Path objects
// these are like a Dirent, but with some more added powers
// check out http://npm.im/path-scurry for more info on their API
const g3 = new Glob("**/baz/**", { withFileTypes: true });
g3.stream().on("data", path => {
  console.log(
    "got a path object",
    path.fullpath(),
    path.isDirectory(),
    path.readdirSync().map(e => e.name),
  );
});

// if you use stat:true and withFileTypes, you can sort results
// by things like modified time, filter by permission mode, etc.
// All Stats fields will be available in that case. Slightly
// slower, though.
// For example:
const results = await glob("**", { stat: true, withFileTypes: true });

const timeSortedFiles = results.sort((a, b) => a.mtimeMs - b.mtimeMs).map(path => path.fullpath());

const groupReadableFiles = results.filter(path => path.mode & 0o040).map(path => path.fullpath());

// custom ignores can be done like this, for example by saying
// you'll ignore all markdown files, and all folders named 'docs'
const customIgnoreResults = await glob("**", {
  ignore: {
    ignored: p => /\.md$/.test(p.name),
    childrenIgnored: p => p.isNamed("docs"),
  },
});

// another fun use case, only return files with the same name as
// their parent folder, plus either `.ts` or `.js`
const folderNamedModules = await glob("**/*.{ts,js}", {
  ignore: {
    ignored: p => {
      const pp = p.parent;
      return !(p.isNamed(pp.name + ".ts") || p.isNamed(pp.name + ".js"));
    },
  },
});

// find all files edited in the last hour, to do this, we ignore
// all of them that are more than an hour old
const newFiles = await glob("**", {
  // need stat so we have mtime
  stat: true,
  // only want the files, not the dirs
  nodir: true,
  ignore: {
    ignored: p => {
      return new Date() - p.mtime > 60 * 60 * 1000;
    },
    // could add similar childrenIgnored here as well, but
    // directory mtime is inconsistent across platforms, so
    // probably better not to, unless you know the system
    // tracks this reliably.
  },
});
```
