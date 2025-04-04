# gulp

## install

```sh
npm i -D conventional-recommended-bump
npm i -D conventional-changelog-cli
npm i -D conventional-github-releaser
npm i -D dotenv
npm i -D execa
```

## gulpfile.js

```js
const gulp = require("gulp");
const { promisify } = require("util");
const conventionalRecommendedBump = require("conventional-recommended-bump");
const conventionalGithubReleaser = require("conventional-github-releaser");
const execa = require("execa");
const dotenv = require("dotenv");
const fs = require("fs");

// load environment variables
const result = dotenv.config();

if (result.error) {
  throw result.error;
}

// Conventional Changelog preset
const preset = "angular";
// print output of commands into the terminal
const stdio = "inherit";

async function bumpVersion() {
  // get recommended version bump based on commits
  const { releaseType } = await promisify(conventionalRecommendedBump)({ preset });
  // bump version without committing and tagging
  await execa("npm", ["version", releaseType, "--no-git-tag-version"], {
    stdio,
  });
}

async function changelog() {
  await execa("npx", ["conventional-changelog", "--preset", preset, "--infile", "CHANGELOG.md", "--same-file"], {
    stdio,
  });
}

async function commitTagPush() {
  // even though we could get away with "require" in this case, we're taking the safe route
  // because "require" caches the value, so if we happen to use "require" again somewhere else
  // we wouldn't get the current value, but the value of the last time we called "require"
  const { version } = JSON.parse(await promisify(fs.readFile)("package.json"));
  const commitMsg = `chore: release ${version}`;
  await execa("git", ["add", "."], { stdio });
  await execa("git", ["commit", "--message", commitMsg], { stdio });
  await execa("git", ["tag", `v${version}`], { stdio });
  await execa("git", ["push", "--follow-tags"], { stdio });
}

function githubRelease(done) {
  conventionalGithubReleaser({ type: "oauth", token: process.env.GH_TOKEN }, { preset }, done);
}

exports.release = gulp.series(bumpVersion, changelog, commitTagPush, githubRelease);
```
