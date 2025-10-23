# ai base dataset

## modality (양식)

> 데이터의 양식을 의미

```txt
text
image
video
audio
3D
tabular (표)
geospatial (지리적)
timeseries (시계열)
```

## format (형식)

> 데이터의 포멧을 의미

```txt
text
json
csv
parquet (파케이) # 고속 데이터 처리용 바이너리 포맷 / 하둡에서 칼럼방식으로 저장하는 저장 포맷
arrow (애로우) # 최적화된 데이터셋 포맷 / 파케이와 비슷하지만 메모리에 로드할 때 더 빠름
imagefolder (이미지 폴더)
soundfolder (오디오 폴더)
webdataset (웹 데이터셋)
```

## library (라이브러리)

> 데이터셋을 로드하고 사용할 때 필요한 라이브러리

```txt
datasets
webdataset
pandas
croissant
polars
dask
distilabel
argilla
fiftyone
```
