# tailwindcss selector

```txt
element: [&_p]:hidden

class: [&_.class-name]:hidden, [&_.class\_name]:hidden

자식의 class 중: [&>.class-name]:hidden, [&>.class\_name]:hidden

children: *:hidden, [&:nth-child(1)]:hidden

not: [&:not(.class-name)]:hidden, [&:not(.class\_name)]:hidden

자식의 class 중 not: [&>:not(.class-name)]:hidden, [&>:not(.class\_name)]:hidden
```
