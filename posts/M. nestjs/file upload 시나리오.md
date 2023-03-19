# 파일/이미지 업로드 시나리오

## create

1. 폼데이터로 보내면 서버에서 forEach로 api에 쏘기

## update

1. api에서 기존에 있는 파일 get요청
2. 폼데이터로 받은 데이터와 비교 filter true는 그대로 두고 false는 delete
3. 없는 파일들은 forEach로 api에 쏘기

## delete

1. api delete 요청

## 폼데이터로 보내서 서버에서 오브젝트서버에 전송

## 폼데이터로 보내서 서버에 바로 저장

## 클라이언트에서 file input에 넣을때마다 오브젝트서버에 전송
