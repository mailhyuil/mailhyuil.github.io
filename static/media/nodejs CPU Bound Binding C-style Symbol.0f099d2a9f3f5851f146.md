# nodejs C-style Symbol

> C 언어 방식의 이름 규칙과 호출 규약으로 export된 심볼 (mangling 없는 C 형식 심볼)
>
> > rust, c++, zod 등으로 작성된 native addon을 빌드 시 c-style symbol을 사용해야 함

```txt
Symbol
컴파일된 바이너리에서 노출되는 함수/변수 이름
say_hello, _Z10say_hellov

Name Mangling
C++ 등의 언어에서 함수명을 컴파일 시 내부적으로 복잡하게 변환하는 과정
add(int, int) → _Z3addii
C linkage (C-style linkage)	extern "C"로 지정한 함수가 name mangling 없이 symbol을 노출하는 방식
say_hello 그대로 유지됨

Calling Convention
함수가 스택/레지스터를 쓰는 방식 (ABI와 관계 있음)
cdecl, stdcall 등
```

```c
extern "C" void say_hello();
```
