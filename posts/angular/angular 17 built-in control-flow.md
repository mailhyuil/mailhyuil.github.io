# angular built-in control flow

```ts
@if (loggedIn) {
  The user is logged in
} @else {
  The user is not logged in
}

@switch (accessLevel) {
  @case ('admin') { <admin-dashboard/> }
  @case ('moderator') { <moderator-dashboard/> }
  @default { <user-dashboard/> }
}

@for (user of users; track user.id) {
  {{ user.name }}
} @empty {
  Empty list of users
}
```
