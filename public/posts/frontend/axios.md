# axios
> fetch와 비슷한 api
```ts
export const useUpload = (file: File): Promise<ImageUploadResult> => {
    return new Promise(async (resolve, reject) => {
        const data = new FormData();
        data.append('file', file); // data 생성

        const config = { // axios 함수에 넣을 config
            method: 'post',
            url: 'http://image.lepisode.team/api/upload.php',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: data // config 객체에 데이터 넣기
        };

        axios(config).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            console.log(err);
            reject(err);
        })
    })
}
```