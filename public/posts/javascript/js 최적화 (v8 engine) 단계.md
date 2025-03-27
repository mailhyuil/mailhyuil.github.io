# js v8 최적화 단계

> Interpreter = Ignition
>
> Non-Optimized JIT Compiler = SparkPlug
>
> SSA (Static Single Assignment) Based JIT Compiler = Maglev
>
> Optimized JIT Compiler = TurboFan

1. Parsing -> AST 생성
   > 자바스크립트 코드를 파싱해서 AST(구문 트리)로 변환함
2. Ignition Compiler -> ByteCode 생성 -> Ignition Interpreter ByteCode를 실행

   > AST 기반으로 Ignition Compiler가 바이트코드 생성 → Ignition Interpreter가 실행함
   >
   > > 바이트코드는 인터프리터(가상머신)이 이해할 수 있는 중간 코드
   > >
   > > CPU가 이해할 수 있는 코드(Native code)로 변환하기 전의 중간 코드

3. SparkPlug (JIT Compiler) -> Non-Optimized Machine Code
   > 최적화 되지 않은 상태로 Machine Code로 변환하여 실행함
4. Maglev (Static Single Assignment Based JIT Compiler) -> Optimized Machine Code
   > SparkPlug와 TurboFan 중간 단계의 Hot Path를 최적화하는 JIT Compiler
5. Profiling -> TurboFan (JIT Compiler) -> Optimized Machine Code
   > 코드를 실행하면서 최적화 기준 (조건, 통계, hotness threshold (약 수천번) 등)을 수집
   >
   > 최적화 기준 충족시 Ignition은 TurboFan에게 알림
   >
   > > 코드를 최적화된 머신코드로 컴파일하고 교체
6. Deoptimization
   > 만약 최적화 가정이 틀리면? (예: 갑자기 다른 타입 들어옴)
   >
   > > 최적화된 코드 버리고 다시 Non-Optimized Machine Code 모드로 되돌아감
   > >
   > > > deopt. 성능 확 떨어짐
