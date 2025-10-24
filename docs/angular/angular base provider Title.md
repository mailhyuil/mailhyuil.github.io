# angular base provider Title

```ts
import { Meta, Title } from "@angular/platform-browser";
@Component({
  standalone: true,
  imports: [RouterModule],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = inject(Title);
  meta = inject(Meta);
  router = inject(Router);
  route = inject(ActivatedRoute);
  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      let title;
      let route = this.route.firstChild;
      while (route) {
        title = route.snapshot.data["title"];
        route = route.firstChild;
      }
      this.title.setTitle(title ? "언어재활임상연구회 · " + title : "언어재활임상연구회");
      this.meta.updateTag({
        property: "og:image",
        content: `${window.origin}${"assets/icons/logo.svg"}`,
      });
    });
  }
}
```
