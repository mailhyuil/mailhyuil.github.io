# compile swc plugin

## main.ts

```ts
function onClick() {
  console.log("hello");
}
onClick();
```

## transformer.rs

```rs
use swc_core::{
    ast::*,
    visit::{VisitMut, VisitMutWith},
    common::Spanned,
};

impl VisitMut for TransformVisitor {
    fn visit_mut_bin_expr(&mut self, e: &mut BinExpr) {
        e.visit_mut_children_with(self);

        if e.op == op!("===") {
            e.left = Box::new(Ident::new("kdy1".into(), e.left.span()).into());
        }
    }
}
```

## .swcrc

```json
{
  "$schema": "https://swc.rs/schema.json",
  "jsc": {}
}
```
