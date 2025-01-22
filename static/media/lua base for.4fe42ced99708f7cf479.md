# lua base for

```lua
local colors = {'red', 'green', 'blue'}

-- array ipairs 사용
for i, v in ipairs(colors) do
    print(i, v)
end

for i = 1, 2 do -- 2번 반복
    print(i, colors[i])
end

for i = 1, #colors do -- colors의 길이만큼 반복
    print(i, colors[i])
end

-- table pairs 사용
local user = {
    name = 'john',
    age = 20,
}

for k, v in pairs(user) do
    print(k, v)
end

```
