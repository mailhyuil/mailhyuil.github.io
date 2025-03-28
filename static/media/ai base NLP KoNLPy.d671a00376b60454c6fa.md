# ai base NLP KoNLPy (코엔엘파이)

> 한국어 자연어 처리 모듈
>
> > KoNLPy는 다음과 같은 다양한 형태소 분석, 태깅 라이브러리를 파이썬에서 쉽게 사용할 수 있도록 모아놓았다.

```txt
Hannanum: 한나눔. KAIST Semantic Web Research Center 개발.
Kkma: 꼬꼬마. 서울대학교 IDS(Intelligent Data Systems) 연구실 개발.
Komoran: 코모란. Shineware에서 개발.
Open Korean Text (Okt): 오픈 소스 한국어 분석기. 과거 트위터 형태소 분석기.
Mecab: 메카브. 일본어용 형태소 분석기를 한국어를 사용할 수 있도록 수정.
```

## install

```sh
# Install Java 1.7+ 설치
# g++ --version
# java --version (1.7+)
apt install g++ openjdk-7-jdk

# Python 3.x
apt install python3-dev
pip3 install konlpy

# Python 2.x
apt install python-dev
pip install konlpy

# No JVM shared library file (libjvm.so) found. Try setting up the JAVA_HOME environment variable properly.
# 위와 같은 오류 발생 시
# sudo apt install default-jdk 입력 후 아래 코드 입력
apt install python3-dev
pip3 install konlpy
```

## Hannanum

```py
from konlpy.tag import Hannanum
hannanum=Hannanum()

# 문장을 형태소 단위로 추출
hannanum.morphs('안녕. 나는 하늘색과 딸기를 좋아해')
>> ['안녕', '.', '나', '는', '하늘색', '과', '딸기', '를', '좋', '아', '하', '어']

# 문장을 명사 단위로 추출
hannanum.nouns('안녕. 나는 하늘색과 딸기를 좋아해')#
>> ['나', '하늘색', '딸기']

# 형태소의 종류와 함께 출력
hannanum.pos('안녕. 나는 하늘색과 딸기를 좋아해')
>> [('안녕', 'I'), ('.', 'S'), ('나', 'N'), ('는', 'J'), ('하늘색', 'N'), ('과', 'J'), ('딸기', 'N'), ('를', 'J'), ('좋', 'P'), ('아', 'E'), ('하', 'P'), ('어', 'E')]

# 품사의 종류 출력
hannanum.tagset
>> {'E': '어미', 'EC': '연결 어미', 'EF': '종결 어미', 'EP': '선어말어미', 'ET': '전성 어미', 'F': '외국어', 'I': '독립언', 'II': '감탄사', 'J': '관계언', 'JC': '격조사', 'JP': '서술격 조사', 'JX': '보조사', 'M': '수식언', 'MA': '부사', 'MM': '관형사', 'N': '체언', 'NB': '의존명사', 'NC': '보통명사', 'NN': '수사', 'NP': '대명사', 'NQ': '고유명사', 'P': '용언', 'PA': '형용사', 'PV': '동사', 'PX': '보조 용언', 'S': '기호', 'X': '접사', 'XP': '접두사', 'XS': '접미사'}
```

## Kkma

```py
from konlpy.tag import Kkma
kkma=Kkma()

#형태소 분석
print(kkma.morphs('안녕. 나는 하늘색과 딸기를 좋아해'))
>> ['안녕', '.', '나', '는', '하늘색', '과', '딸기', '를', '좋아하', '어']

#명사 추출
print(kkma.nouns('안녕. 나는 하늘색과 딸기를 좋아해'))
>> ['안녕', '나', '하늘색', '딸기']

#품사와 함께 반환
print(kkma.pos('안녕. 나는 하늘색과 딸기를 좋아해'))
>> [('안녕', 'NNG'), ('.', 'SF'), ('나', 'NP'), ('는', 'JX'), ('하늘색', 'NNG'), ('과', 'JC'), ('딸기', 'NNG'), ('를', 'JKO'), ('좋아하', 'VV'), ('어', 'ECS')]

#문장 추출
print(kkma.sentences('안녕하세요. 나는 하늘색과 딸기를 좋아해'))
>> ['안녕하세요.', '나는 하늘색과 딸기를 좋아해']
```

## Komoran

```py
from konlpy.tag import Komoran
komoran=Komoran()

#형태소 추출
print(komoran.morphs('안녕. 나는 하늘색과 딸기를 좋아해'))
>> ['안녕', '.', '나', '는', '하늘색', '과', '딸기', '를', '좋아하', '아']

#명사 추출
print(komoran.nouns('안녕. 나는 하늘색과 딸기를 좋아해'))
>> ['하늘색', '딸기']

#품사 정보와 함께 추출
print(komoran.pos('안녕. 나는 하늘색과 딸기를 좋아해'))
>> [('안녕', 'IC'), ('.', 'SF'), ('나', 'NP'), ('는', 'JX'), ('하늘색', 'NNP'), ('과', 'JC'), ('딸기', 'NNP'), ('를', 'JKO'), ('좋아하', 'VV'), ('아', 'EC')]
```

## Okt

```py
from konlpy.tag import Okt
okt=Okt()

#형태소 추출
print(okt.morphs('안녕. 나는 하늘색과 딸기를 좋아해'))
>> ['안녕', '.', '나', '는', '하늘색', '과', '딸기', '를', '좋아해']

#명사 추출
print(okt.nouns('안녕. 나는 하늘색과 딸기를 좋아해'))
>> ['안녕', '나', '하늘색', '딸기']

#품사와 함께 추출
print(okt.pos('안녕. 나는 하늘색과 딸기를 좋아해'))
>> [('안녕', 'Noun'), ('.', 'Punctuation'), ('나', 'Noun'), ('는', 'Josa'), ('하늘색', 'Noun'), ('과', 'Josa'), ('딸기', 'Noun'), ('를', 'Josa'), ('좋아해', 'Adjective')]

#어절 추출
print(okt.phrases('안녕. 나는 하늘색과 딸기를 좋아해'))
>> ['안녕', '하늘색', '하늘색과 딸기', '딸기']
```
