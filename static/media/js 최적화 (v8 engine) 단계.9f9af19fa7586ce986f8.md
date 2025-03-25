# js v8 최적화 단계

> Interpreter의 이름은 Ignition, JIT Compiler의 이름은 TurboFan이다.

1. Parsing -> AST 생성
   > 자바스크립트 코드를 파싱해서 AST(구문 트리)로 변환함
2. ByteCode 생성 -> Interpreter(Ignition) 실행

   > AST 기반으로 바이트코드 생성 → 인터프리터가 실행함
   >
   > > 바이트코드는 CPU가 이해할 수 있는 머신코드로 변환하기 전의 중간 코드

3. Profiling
   > Ignition이 코드를 실행하면서 최적화 기준 (조건, 통계, hotness threshold (약 수천번) 등)을 수집함
4. JIT Optimization Compile (TurboFan)
   > 최적화 기준 충족시 Ignition은 TurboFan에게 알림
   >
   > > 코드를 최적화된 머신코드로 컴파일하고 교체
5. Deoptimization
   > 만약 최적화 가정이 틀리면? (예: 갑자기 다른 타입 들어옴)
   >
   > > 최적화된 코드 버리고 다시 interpreter 모드로 되돌아감
   > >
   > > > deopt. 성능 확 떨어짐
