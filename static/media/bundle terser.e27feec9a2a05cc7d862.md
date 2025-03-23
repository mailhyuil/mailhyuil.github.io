# terser

> terse : 간결한, 간단한, 짧은
>
> > 사용하지 않는 코드를 제거해 간결하게 만들어주는 툴 (minifier)
> >
> > > export 되어 있어도 side-effects 가 없는 코드라면 제거된다.

## special comments

```
/*@__INLINE__*/ - forces a function to be inlined somewhere.
/*@__NOINLINE__*/ - Makes sure the called function is not inlined into the call site.
/*@__PURE__*/ - Marks a function call as pure. That means, it can safely be dropped.
/*@__KEY__*/ - Marks a string literal as a property to also mangle it when mangling properties.
/*@__MANGLE_PROP__*/ - Opts-in an object property (or class field) for mangling, when the property mangler is enabled.
```
