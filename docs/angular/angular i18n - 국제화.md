# angular i18n (국제화)

## install

```sh
ng add @angular/localize
```

## 번역 파일 생성

> src/locale 디렉토리
>
> > ng extract-i18n 로 messages.xlf 파일 생성
> >
> > > messages.{locale}.xlf

```sh
ng extract-i18n [project-name]
```

## 앱에 적용

```json
"projects": {
    "angular.io-example": {
      // ...
      "i18n": {
        "sourceLocale": "en-US",
        "locales": {
          "fr": {
            "translation": "src/locale/messages.fr.xlf",
            // ...
          },
          "ko": {
            "translation": "src/locale/messages.ko.xlf",
            // ...
          },
          "en": {
            "translation": "src/locale/messages.en.xlf",
            // ...
          }
        }
      },
      "architect": {
        // ...
      }
    }
  }
```

## usage

### html

```
<p i18n="{i18n_metadata}"> {string_to_translate} </p>
<p i18n> Hello, World! </p>
```

### ts

```ts
const message = $localize`string_to_translate`;
```
