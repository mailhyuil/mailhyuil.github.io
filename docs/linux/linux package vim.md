# vim

## install

```sh
apt install vim -y
```

## 명령어

```sh
# 동사 #
d (delete), c (change), y (yank/copy), > (indent)

# 명사(이동) #
w (word), b (back a word), 2j (down 2 lines)

# 명사(텍스트 객체) #
iw (inner word), it (inner tag), i” (inner quotes)

# 자주 사용하는 명령어 #
dd # 한 줄 삭제 (delete)
2dd # 두 줄 삭제 (delete)
dw # 단어 끝까지 삭제 (delete word)
d$ # 문장 끝까지 삭제 (delete to end of line)
dG # 현재 커서부터 문서 끝까지 삭제 (delete to end of file)

D # 문장 끝까지 삭제 (delete to end of line)

gg # 문서의 맨 처음으로 이동 (go to top of file)
G # 문서의 맨 끝으로 이동 (go to bottom of file)
5G # 5번째 줄로 이동 (go to line)

yy # 한 줄 복사 (yank)
2yy # 두 줄 복사 (yank)
yw # 단어 끝까지 복사 (yank word)
y$ # 문장 끝까지 복사 (yank to end of line)
yG # 현재 커서부터 문서 끝까지 복사 (yank to end of file)

wc # 단어 세기 (word count)
wc -l # 줄 세기 (line count)

p # 붙여넣기 (paste)

u # 실행 취소 (undo)

/ # 검색하기 (search)

^ # 문장의 맨 앞으로 이동 (go to first character of line)
$ # 문장의 맨 끝으로 이동 (go to end of line)

ctrl + b # 한 화면 위로 이동 (go back one full screen)
ctrl + f # 한 화면 아래로 이동 (go forward one full screen)

:set [number] # [number]번째 줄로 이동 (go to line)
```

## 조합

```sh
dw # 단어 끝까지 삭제 (delete word)
diw # 커서에 해당하는 전체 단어 삭제 (delete inner word)
y4j # 4줄 복사 (yank 4 lines)
cit # HTML 태그 안의 내용 변경 (change inner tag)
```

# 저장과 종료

```sh
:q # 종료 (quit)
:q! # 강제로 종료 (quit)

:w [파일이름] # [파일이름]으로 저장 (write)
:wq # 저장 후 종료 (write quit)
:x # 저장 후 종료 (exit)
ZZ # 저장 후 종료
```
