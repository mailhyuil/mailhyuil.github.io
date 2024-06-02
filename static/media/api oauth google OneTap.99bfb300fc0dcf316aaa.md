# api google-oauth OneTap

## install

```sh
npm i google-one-tap

npm i @types/google-one-tap

npm i google-auth-library # 서버용 OAuth2Client sdk
```

## console 설정 origin url

http://localhost
http://localhost:4200
둘다 설정

## login

```ts
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AfterViewInit, Component, ElementRef, NgZone, ViewChild } from "@angular/core";
import { accounts } from "google-one-tap";
import { IconComponent } from "../../components/icon/icon.component";
declare var google: any;
@Component({
  selector: "cms-login",
  standalone: true,
  imports: [CommonModule, IconComponent, HttpClientModule],
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements AfterViewInit {
  @ViewChild("loginButton") loginButtonRef!: ElementRef<HTMLDivElement>;
  constructor(private readonly httpService: HttpClient, private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    const gAccounts: accounts = google.accounts;

    gAccounts.id.initialize({
      client_id: process.env["NX_GOOGLE_CLIENT_KEY"]!,
      ux_mode: "popup",
      cancel_on_tap_outside: true,
      callback: ({ credential }) => {
        console.log(credential);
      },
    });

    gAccounts.id.renderButton(this.loginButtonRef.nativeElement, {
      size: "large",
      width: 320,
      text: "continue_with",
    });
  }
}
```
