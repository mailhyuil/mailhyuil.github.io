# nest file upload hash

> update 시 파일이 변경되었는지 확인하기 위해 hash를 사용
>
> > hash가 전부 일치하면 skip
> >
> > > hash가 일치하지 않으면 delete entity / create file

## hash-file.ts

> 파일 무결성 용도로 md5가 많이 사용된다.

```ts
import crypto from "crypto";
export function hashFile(file: Express.Multer.File) {
  const fileBuffer = file.buffer;

  const hashSum = crypto.createHash("md5");

  hashSum.update(fileBuffer);

  const hex = hashSum.digest("hex");

  return hex;
}
```

## update

```ts
 async update(
    id: string,
    { data, files }: { data: UpdateJobPostingDTO; files: Express.Multer.File[] }
  ) {
    const found = await this.prisma.jobPosting
      .findUniqueOrThrow({ where: { id }, include: { files: true } })
      .catch((e) => {
        throw new NotFoundException('JobPosting을 찾을 수 없습니다.');
      });

    const existingFiles: Record<string, File> = found.files.reduce(
      (prev, acc) => {
        prev[acc.hash] = acc;
        return prev;
      },
      {}
    );

    const newFiles: Record<string, Express.Multer.File> = files.reduce(
      (prev, acc) => {
        prev[hashFile(acc)] = acc;
        return prev;
      },
      {}
    );

    const willDelete: string[] = [];
    // existingFiles와 newFiles를 비교해서 매칭되는게 있으면 후보에서 제거
    Object.keys(newFiles).map((hash) => {
      if (existingFiles[hash]) {
        delete existingFiles[hash];
        delete newFiles[hash];
      }
    });
    // existingFiles 있고 newFiles에는 없는 파일을 willDelete에 추가하고 파일 삭제
    Object.keys(existingFiles).map((hash) => {
      if (!newFiles[hash]) {
        willDelete.push(existingFiles[hash].id);
        this.fileService.delete(existingFiles[hash].url);
      }
    });

    // newFiles에 있고 existingFiles에 없는 파일을 willCreate에 추가하고 파일 업로드
    const willCreatePromises = Object.keys(newFiles).map(async (hash) => {
      if (!existingFiles[hash]) {
        return this.fileService.upload(newFiles[hash]);
      }
    });
    const willCreate: CreateFileDTO[] = await Promise.all(willCreatePromises);
    const updated = await this.prisma.jobPosting
      .update({
        where: { id },
        data: {
          ...data,
          files: {
            createMany: {
              data: willCreate,
            },
            deleteMany: {
              id: {
                in: willDelete,
              },
            },
          },
        },
      })
      .catch((e) => {
        throw new BadRequestException(e, 'JobPosting을 수정할 수 없습니다.');
      });
    return plainToInstance(JobPostingDTO, updated);
  }
```
