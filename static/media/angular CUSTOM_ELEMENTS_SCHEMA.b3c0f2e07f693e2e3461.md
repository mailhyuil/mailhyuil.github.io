# angular CUSTOM_ELEMENTS_SCHEMA

> 앵귤러는 기본적으로 HTML의 유효성을 검사하기 때문에 일반적인 HTML 요소들만 사용하는 것이 허용됩니다.
>
> > 하지만 외부에서 가져온 웹 컴포넌트나 커스텀 요소들은 앵귤러의 기본 스키마를 통과하지 못하여 경고 또는 오류가 발생할 수 있습니다.
> >
> > > 외부 커스텀 요소(예: 웹 컴포넌트)를 사용할 때 사용하는 스키마

```ts
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  standalone: true,
  imports: [CommonModule, IconComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
```
