# angular MVVM

## MODEL

```ts
export class User {
  id: number;
  name: string;
  email: string;
}

export class UserService {
  constructor(private readonly httpService: HttpService) {}
  getUsers(): Observable<User[]> {
    return this.httpService.get<User[]>("user");
  }
}
```

## VIEW MODEL

```ts
import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { UserService } from "../services/user.service";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  users: User[]; // VIEW MODEL

  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
```

## VIEW

```html
<h2>Users</h2>
<ul>
  <li *ngFor="let user of users"> {{ user.name }} - {{ user.email }} </li>
</ul>
```
