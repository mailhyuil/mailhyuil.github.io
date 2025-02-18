# python api LoRA

## install

```sh
poetry add torch transformers peft datasets accelerate bitsandbytes
```

## generate dataset

> Hugging Face Datasets 라이브러리를 이용

```py
from datasets import load_dataset

# 예제 데이터셋 로드 (QA 데이터)
dataset = load_dataset("squad", split="train[:100]")

# 학습 데이터 전처리
def preprocess_function(examples):
    return tokenizer(examples["context"], truncation=True, padding="max_length", max_length=512)

tokenized_datasets = dataset.map(preprocess_function, batched=True)
```

## load model

```py
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

# 학습할 모델 선택 (예: Llama2)
MODEL_NAME = "meta-llama/Llama-2-7b-hf"

# 모델과 토크나이저 로드
model = AutoModelForCausalLM.from_pretrained(
    MODEL_NAME,
    torch_dtype=torch.float16,
    device_map="auto"
)

tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)

```

## adapt model

```py
from peft import LoraConfig, get_peft_model

# LoRA 설정
lora_config = LoraConfig(
    r=8,  # 랭크 크기 (값이 클수록 더 많은 가중치 업데이트)
    lora_alpha=16,  # LoRA scaling factor
    target_modules=["q_proj", "v_proj"],  # 적용할 모델의 레이어 지정 (예: Attention 부분)
    lora_dropout=0.1,  # 드롭아웃 적용
    bias="none"
)

# 모델에 LoRA 적용
model = get_peft_model(model, lora_config)
model.print_trainable_parameters()  # 학습 가능한 파라미터 수 확인
```

## train model

```py
from transformers import TrainingArguments, Trainer

# 학습 설정
training_args = TrainingArguments(
    output_dir="./lora_model",  # 모델 저장 폴더
    num_train_epochs=3,  # 학습 횟수
    per_device_train_batch_size=4,  # 배치 크기
    save_strategy="epoch",  # 매 Epoch마다 저장
    logging_dir="./logs",
    logging_steps=10,
    report_to="none"
)

# Trainer 생성
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_datasets
)

# 모델 학습 실행
trainer.train()
```

## 가중치 저장 (.safetensors)

```py
from peft import PeftModel

# 원본 모델과 LoRA 가중치를 결합하여 저장
model = PeftModel.from_pretrained(model, "./lora_model")
model.save_pretrained("./lora_model_safetensors", safe_serialization=True)
```

## 사용

```py
from peft import PeftModel

# 기존 모델에 LoRA 가중치 적용
model = AutoModelForCausalLM.from_pretrained(MODEL_NAME, torch_dtype=torch.float16)
model = PeftModel.from_pretrained(model, "./lora_model_safetensors")

# 테스트 수행
input_text = "오늘 날씨가 어떤가요?"
inputs = tokenizer(input_text, return_tensors="pt").to("cuda")
outputs = model.generate(**inputs)

print(tokenizer.decode(outputs[0], skip_special_tokens=True))
```
