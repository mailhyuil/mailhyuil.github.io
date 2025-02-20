# lua base if

```lua
-- condition
if a == 1 then
    print('a is 1')
elseif a == 2 then
    print('a is 2')
else
    print('a is not 1 or 2')
end

if b ~= 2 then -- !== 와 같음
    print('b is not 2')
end

if 0 and '' then
    print('0 and "" is true')
end

if false or not true then -- !true 와 같음
    print('false or not true is true')
end

if nil then
    print('nil is false')
end
```
