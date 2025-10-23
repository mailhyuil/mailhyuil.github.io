# nest session properties

## Session.regenerate(callback)

To regenerate the session simply invoke the method. Once complete, a new SID and Session instance will be initialized at req.session and the callback will be invoked.

```ts
req.session.regenerate(function (err) {
  // will have a new session here
});
```

## Session.destroy(callback)

Destroys the session and will unset the req.session property. Once complete, the callback will be invoked.

```ts
req.session.destroy(function (err) {
  // cannot access session here
});
```

## Session.reload(callback)

Reloads the session data from the store and re-populates the req.session object. Once complete, the callback will be invoked.

```ts
req.session.reload(function (err) {
  // session updated
});
```

## Session.save(callback)

Save the session back to the store, replacing the contents on the store with the contents in memory (though a store may do something else--consult the store's documentation for exact behavior).

This method is automatically called at the end of the HTTP response if the session data has been altered (though this behavior can be altered with various options in the middleware constructor). Because of this, typically this method does not need to be called.

There are some cases where it is useful to call this method, for example, redirects, long-lived requests or in WebSockets.

```ts
req.session.save(function (err) {
  // session saved
});
```

## Session.cookie

```ts
req.session.cookie.expires;
req.session.cookie.maxAge;
```

## Session.id

```
req.session.id;
===
req.sessionID;
```
