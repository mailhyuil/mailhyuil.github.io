# postgres query replace and update

```sql
BEGIN;

UPDATE files
SET url = replace(url,
'https://kr1-api-object-storage.nhncloudservice.com/v1/AUTH_26d8b13648b74f6d9b47fdf639f56270/digital-signage-objects',
'https://kr1-api-object-storage.gov-nhncloudservice.com/v1/AUTH_d3cba50472224b048edbd42220dd5ecb/files'
);

COMMIT;
```
