# ai base fine tuning LoRA

## install

```sh
poetry add torch # meta에서 개발한 딥러닝 프레임워크 (pytorch)
poetry add bitsandbytes # nvidia에서 개발한 8-bit 및 4-bit 양자화(Quantization)로 모델을 경량화할 때 사용하는 라이브러리
poetry add transformers peft datasets accelerate # hugging face api를 사용하기 위한 라이브러리

poetry add torch bitsandbytes transformers peft datasets accelerate
```

## fine tuning

```py
import torch
from transformers import AutoModelForSequenceClassification, AutoTokenizer, Trainer, TrainingArguments
from datasets import load_dataset
from peft import LoraConfig, get_peft_model, TaskType

# ✅ 1. IMDB 데이터셋 로드
dataset = load_dataset("imdb")
tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")

def preprocess_function(examples):
    return tokenizer(examples["text"], padding="max_length", truncation=True)

tokenized_datasets = dataset.map(preprocess_function, batched=True)
tokenized_datasets = tokenized_datasets.remove_columns(["text"])
tokenized_datasets.set_format("torch")

train_dataset = tokenized_datasets["train"].shuffle(seed=42).select(range(2000))  # 데이터 일부만 사용 (빠른 테스트)
test_dataset = tokenized_datasets["test"].shuffle(seed=42).select(range(500))

# ✅ 2. 사전 훈련된 모델 로드 (BERT)
base_model = AutoModelForSequenceClassification.from_pretrained("bert-base-uncased", num_labels=2)

# ✅ 3. LoRA 설정 (적용할 레이어 및 랭크 설정)
lora_config = LoraConfig(
    task_type=TaskType.SEQ_CLS,  # 시퀀스 분류
    inference_mode=False,
    r=8,  # Low-rank 차원 (값이 작을수록 적은 파라미터 업데이트)
    lora_alpha=16,  # 스케일링 계수
    lora_dropout=0.1,  # 드롭아웃 적용
    target_modules=["query", "value"],  # LoRA 적용할 Transformer 모듈 (Q, V)
)

# ✅ 4. LoRA 적용
lora_model = get_peft_model(base_model, lora_config)
lora_model.print_trainable_parameters()  # 훈련 가능한 파라미터 개수 확인

# ✅ 5. 훈련 설정
training_args = TrainingArguments(
    output_dir="./lora_imdb",  # 저장할 디렉토리
    evaluation_strategy="epoch",
    save_strategy="epoch",
    per_device_train_batch_size=8,
    per_device_eval_batch_size=8,
    num_train_epochs=3,
    logging_dir="./logs",
    logging_steps=50,
    save_total_limit=1,
    load_best_model_at_end=True,
    fp16=True,  # GPU 가속
    report_to="none"
)

trainer = Trainer(
    model=lora_model,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=test_dataset,
    tokenizer=tokenizer,
)

# ✅ 6. 모델 훈련 (LoRA 적용된 모델 학습)
trainer.train()

# ✅ 7. 평가
trainer.evaluate()

# ✅ 8. LoRA 모델 & 토크나이저 저장
save_directory = "./lora_imdb_saved"

trainer.save_model(save_directory)  # 모델 저장
tokenizer.save_pretrained(save_directory)  # 토크나이저 저장

print(f"LoRA 모델이 '{save_directory}'에 저장되었습니다.")
```
