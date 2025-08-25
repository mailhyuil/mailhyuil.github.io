# angular DomSanitizer

> innerHTML 같은 동적으로 추가되는 요소에서 XSS 위험 요소를 제거해주는 API

```ts
abstract class DomSanitizer implements Sanitizer {
  abstract sanitize(context: SecurityContext, value: string | SafeValue | null): string | null;
  abstract bypassSecurityTrustHtml(value: string): SafeHtml;
  // <img src="x" onerror="alert(\'해킹됨!\')"> 제거
  abstract bypassSecurityTrustStyle(value: string): SafeStyle;
  // 'background-image: url("javascript:alert(\'해킹됨!\')")' 제거
  abstract bypassSecurityTrustScript(value: string): SafeScript;
  // alert("해킹됨!"); 제거
  abstract bypassSecurityTrustUrl(value: string): SafeUrl;
  // 'javascript:alert("해킹됨!")' 제거
  abstract bypassSecurityTrustResourceUrl(value: string): SafeResourceUrl;
  // <iframe src="javascript:alert('해킹됨!')"></iframe> 제거
}
```
