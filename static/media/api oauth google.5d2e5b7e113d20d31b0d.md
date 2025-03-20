# api oauth google

```ts
  async oauthSignIn() {
    const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    // 이방식은 안됨!!!
    // await lastValueFrom(
    //   this.httpService.get(oauth2Endpoint, {
    //     params: {
    //       client_id: process.env?.['NX_GOOGLE_CLIENT_KEY'] || '',
    //       redirect_uri: 'http://localhost:4200/oauth',
    //       response_type: 'token',
    //       scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
    //       include_granted_scopes: 'true',
    //       state: 'pass-through value',
    //     },
    //   })
    // );

    // 새창으로 띄어줘야 된다!!!
    const url = new URL(oauth2Endpoint);
    const searchParams = url.searchParams;
    searchParams.append(
      'client_id',
      process.env?.['NX_GOOGLE_CLIENT_KEY'] || ''
    );
    searchParams.append('redirect_uri', 'http://localhost:4200/');
    searchParams.append('response_type', 'token');
    searchParams.append(
      'scope',
      'https://www.googleapis.com/auth/drive.metadata.readonly'
    );
    searchParams.append('include_granted_scopes', 'true');

    window.open(url);
  }
```
