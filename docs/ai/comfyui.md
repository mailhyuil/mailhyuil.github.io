# ComfyUI

노드 기반 워크플로우로 이미지 생성 환경을 구성할 수 있는 인터페이스 툴.  
Stable Diffusion 모델을 기반으로 다양한 스타일, 기능, 제어 구조를 시각적으로 연결해 사용한다.

## 🟢 기본 핵심 용어

### **Workflow**

이미지를 생성하기 위한 노드의 전체 구조.

### **Node**

각 기능 단위 블록.  
예: 모델 로드, Sampler, LoRA 적용 등.

### **Prompt**

이미지를 설명하는 텍스트.

### **Negative Prompt**

배제하고 싶은 요소를 입력하는 텍스트.

### **Canvas**

노드를 배치하고 연결하는 UI 영역.

---

## 🟡 모델 관련 용어

### **Checkpoint / Checkpointer**

Stable Diffusion 모델 전체를 포함하는 대형 모델 파일.  
→ 이미지 스타일, 구조, 품질을 결정한다.

### **safetensors**

보안 안전성을 갖춘 모델 파일 포맷.  
→ ckpt 대비 안전 + 속도 개선.

### **LoRA**

원본 모델에 추가 스타일 또는 특성을 적용하는 경량 서브 모델.  
→ 캐릭터 스타일, 인물화, 질감 등 커스터마이징 핵심.

### **VAE (Variational Autoencoder)**

Latent 데이터를 실제 RGB 이미지로 변화시키는 디코더 역할.

### **UNet**

이미지 생성 구조의 핵심 모델. 노이즈 제거 및 예측 처리.

### **Clip**

텍스트를 의미 벡터로 변환하는 시스템.  
→ 텍스트 이해도와 결과 정확도에 영향.

### **Refiner**

SDXL에서 후반부 디테일을 향상시키는 보조 모델.

---

## 🟠 이미지 파라미터 용어

### **Seed**

난수 기반 이미지 ID.  
같은 설정 + 같은 seed → 동일 이미지 생성.

### **CFG (Classifier Free Guidance)**

프롬프트 반영 강도 조절 값.  
높을수록 명확하고 직접적 결과.

### **Steps**

노이즈 제거 반복 횟수.  
높이면 고퀄리티 → 시간도 오래 걸림.

### **Scheduler**

이미지 생성 알고리즘 진행 방식.  
예: Euler, DDIM, DPM++ 등.

### **Resolution**

출력 이미지 크기.

---

## 🔵 샘플러 관련 용어

### **Sampler**

이미지 생성 프로세스를 구성하는 계산 방식 시스템.

### **Batch Size**

한 번에 생성할 이미지 수.

### **Batch Count**

반복 수행 횟수.

### **Denoising Strength**

원본 이미지 보존 비율 제어.  
0 = 새 그림 / 1 = 원본 보존 X.

---

## 🟣 ControlNet 용어

### **ControlNet**

이미지 생성 과정에서 구조를 강제하는 기술.  
→ 스케치, 포즈, 윤곽, 깊이 정보 활용.

### 대표 유형

- Canny (윤곽 기반)
- Depth
- Pose
- Tile
- Normal Map
- Inpaint
- OpenPose

---

## 🔴 업스케일 관련 용어

### **Upscale**

이미지 해상도 확대.

### **Latent Upscale**

latent 공간에서 업스케일 계산.

### **ESRGAN / SwinIR / RealESRGAN**

업스케일 모델 종류.

---

## 🟢 이미지 처리 용어

### **Inpaint**

이미지 특정 영역 수정.

### **Outpaint**

이미지 바깥 영역 확장.

### **Mask**

변형할 영역 지정.

### **Tiled Diffusion**

초고해상도 생성 기술.

---

## 🟡 파일 & 포맷 용어

### **PNG Info**

이미지 생성 파라미터가 포함된 png 데이터.

### **Latent**

이미지의 내부 압축 표현.

### **TIFF / PNG / JPG**

이미지 저장 포맷.

---

## 🟠 워크플로우 구조 용어

### **KSampler**

ComfyUI 핵심 샘플링 엔진 노드.  
UNet + CFG + Steps + Scheduler로 구성.

### **Queue**

대기열 생성 구조.

### **Prompt Conditioning**

텍스트 → 의미 벡터 변환 과정.

### **Model Merge**

모델을 조합해 새 모델 생성.

### **Clip Skip**

텍스트 인코딩 레이어 스킵 기능.

---

## 🔵 사용자 편의 용어

### **Preview Node**

실시간 미리보기 노드.

### **Save Image Node**

이미지 자동 저장 노드.

### **Zoom Level**

캔버스 확대/축소 비율.

---

## 🟣 고급 기능 용어

### **AnimateDiff**

애니메이션 생성 기술.

### **IP Adapters**

이미지를 prompt conditioning으로 변환.

### **LoRA Stacking**

여러 LoRA 병합 적용.

### **ControlNet Stacking**

중복 ControlNet 적용.

### **Tiled VAE**

초고해상도 이미지 디코딩 기술.

---

## 🔥 하드웨어 용어

### **VRAM**

GPU 메모리.

### **FP16 / FP32**

연산 정밀도 포맷.

### **TensorRT**

NVIDIA 최적화 연산 시스템.
