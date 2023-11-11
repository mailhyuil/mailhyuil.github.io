# 빌드는 같은 os에서 해야한다.

# Node.js 파일에서 다른 운영 체제에서 빌드하면 문제가 발생할 수 있는 주요 패키지

> javascript는 모든 운영체제에서 동일하게 동작하기 때문에 괜춘

## Native Addons

> Native Addon은 C/C++ 등의 언어로 작성된 Node.js 모듈입니다. Native Addon은 특정 운영 체제와 아키텍처에 종속적이므로, 다른 운영 체제에서 빌드하면 호환성 문제가 발생할 수 있습니다. Native Addon을 사용하는 경우, 각 운영 체제와 아키텍처에 맞는 빌드를 수행해야 합니다.

## Binary Dependencies

> 일부 패키지는 실행 가능한 바이너리 파일을 의존하며, 해당 바이너리 파일은 특정 운영 체제에서 빌드됩니다. 이러한 패키지는 다른 운영 체제에서 실행할 때 문제가 발생할 수 있습니다. 따라서 해당 패키지의 운영 체제 및 아키텍처 호환성을 확인하고, 다른 운영 체제에서 사용할 수 있는 바이너리 파일을 사용해야 합니다.

## 파일 시스템과 경로 관련 패키지

> 파일 시스템과 경로 관련 작업은 운영 체제 간에 차이가 있을 수 있습니다. 따라서 특정 운영 체제에서 경로 구분자, 파일 시스템 권한, 파일 이름의 대소문자 구분 등을 다루는 패키지를 사용할 때, 다른 운영 체제에서는 호환성 문제가 발생할 수 있습니다.