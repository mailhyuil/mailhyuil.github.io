# rxjs creation join array forkJoin

> source를 array로 받음 /// forkJoin([a$, b$])

```ts
forkJoin([
  logo ? this.http.get(logo.file.url, { responseType: "blob" }) : of(null),
  banner ? this.http.get(banner.file.url, { responseType: "blob" }) : of(null),
])
  .pipe(
    filter(() => !!this.client),
    switchMap(([logoBlob, bannerBlob]) => {
      const logoFile = logoBlob
        ? new File([logoBlob], logo.file.name, {
            type: logo.file.type,
          })
        : null;

      const bannerFile =
        bannerBlob && banner
          ? new File([bannerBlob], banner.file.name, {
              type: banner.file.type,
            })
          : null;

      this.form.patchValue({
        logo: logoFile,
        banner: bannerFile,
      });

      return of(null);
    })
  )
  .subscribe(() => {});
```
