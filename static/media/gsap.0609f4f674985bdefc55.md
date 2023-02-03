# GSAP (greenSock)

## install

```
yarn add gsap
```

## 사용 전

1. 어떤 플러그인을 사용할 지 결정!
2. 유료 플러그인도 있다

## cheetsheet

[gsap cheetsheet](https://greensock.com/cheatsheet/)

## basic

```js
gsap.set(".selector", { toVars });
```

## Tween

```js
gsap.to();
gsap.from();
gsap.fromTo();
```

## timeline

```js
const tl = gsap.timeline();
```

## ease

```
// see greensock.com/ease-visualizer
ease: "none" // no ease (same as "linear")

// basic core eases
"power1", "power2", "power3", "power4",
"circ", "expo", "sine"
// each has .in, .out, and .inOut extensions
// i.e. "power1.inOut"

// expressive core eases
"elastic", "back", "bounce", "steps(n)"

// in EasePack plugin (not core)
"rough", "slow", "expoScale(1, 2)"
```
