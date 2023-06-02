# vim

> 동사 — d (delete), c (change), y (yank/copy), > (indent)
>
> > 명사(이동) — w (word), b (back a word), 2j (down 2 lines)
> >
> > > 명사(텍스트 객체) — iw (inner word), it (inner tag), i” (inner quotes)

## 조합

```
dw — 단어 끝까지 삭제 (delete word)
diw — 커서에 해당하는 전체 단어 삭제 (delete inner word)
y4j — 4줄 복사 (yank 4 lines)
cit — HTML 태그 안의 내용 변경 (change inner tag)
```

# 저장과 종료

```
:q : 종료 (quit)
:q! : 강제로 종료 (quit)

:w [파일이름] : [파일이름]으로 저장 (write)
:wq : 저장 후 종료 (write quit)
:x 저장 후 종료 (exit)
ZZ : 저장 후 종료
```
