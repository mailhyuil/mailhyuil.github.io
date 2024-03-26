# angular SSR innerHtml style

> style이 바로 적용되지 않기 때문에 layout shifting이 발생

## ts

```ts
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    InputSearchComponent,
    ContainerComponent,
    LepiButton,
    PaginatorComponent,
    FormsModule,
  ],
  host: { ngSkipHydration: 'true' },
  encapsulation: ViewEncapsulation.None, // 추가
})
```

## scss

> css 파일로 스타일 설정

```scss
.container p {
  word-break: break-word;
  font-weight: 600;
}
```

## html

```html
<div class="flex-1 h-32">
  <p [innerHTML]="faq.answer"></p>
</div>
```
