# redis commands options

```sh
EX seconds # expire in seconds
EXAT timestamp # expire at timestamp
PX milliseconds # expire in milliseconds
PXAT milliseconds-timestamp # expire at milliseconds-timestamp
KEEPTTL # keep the ttl

NX # set if not exists
XX # set if exists

GET # return previous value before SET

# e.g.
SET key value EX 10 XX GET
```
