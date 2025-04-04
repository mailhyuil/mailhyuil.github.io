# ai base Transformer Models Encoder & Decoder

## Encoder

> 입력 문장을 임베딩(벡터)으로 변환하여 문맥을 이해하는 데 최적화됨
>
> > 주로 문장 분류, 정보 검색, 텍스트 임베딩 등에 사용됨
> >
> > > 텍스트 생성 능력은 없음

```txt
# 문서 검색 & 임베딩 서비스
BERT (Bidirectional Encoder Representations from Transformers)
RoBERTa
SBERT (Sentence-BERT) → 검색 & 벡터 DB와 결합
```

## Decoder

> 입력 문장을 이해하고 새로운 텍스트를 생성하는 데 최적화됨
>
> > 이전 단어들을 참고하여 다음 단어를 예측하는 방식 (autoregressive)
> >
> > > 텍스트를 생성하는 능력을 가짐

```txt
# 자연어 생성 서비스
GPT-3, GPT-4 (OpenAI)
LLaMA, Mistral, Falcon (오픈소스)
OPT, BLOOM (Meta & Hugging Face)
```

## Encoder-Decoder

> 입력 텍스트를 이해한 후, 이를 바탕으로 새로운 텍스트를 생성
>
> > 번역, 문서 요약, 문서 재작성 등에 최적화됨

```txt
# 요약, 번역 서비스
T5 (Text-to-Text Transfer Transformer)
BART (Bidirectional and Auto-Regressive Transformers)
mT5 (다국어 지원 T5)
```
