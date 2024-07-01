# Weak Etag vs Strong Etag

```txt
ETag 1  ETag 2  Strong Comparison   Weak Comparison
---------------------------------------------------
W/"1"   W/"1"   no match            match
W/"1"   W/"2"   no match            no match
W/"1"   "1"     no match            match
"1"     "1"     match               match
```
