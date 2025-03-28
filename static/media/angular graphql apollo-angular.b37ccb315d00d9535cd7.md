# angular graphql

## install

```sh
npm i graphql
npm i @apollo/client
npm i apollo-angular
```

## app.module.ts

```ts
import { APOLLO_OPTIONS, ApolloModule } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { InMemoryCache } from "@apollo/client/core";

@NgModule({
  imports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: "https://localhost:3000/api/v1", // interceptor도 같이 적용됨
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class AppModule {}
```

## some.component.ts

```ts
import { Apollo, gql } from "apollo-angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "exchange-rates",
  template: `
    <div *ngIf="loading">Loading...</div>
    <div *ngIf="error">Error :(</div>
    <div *ngIf="rates">
      <div *ngFor="let rate of rates">
        <p>{{ rate.currency }}: {{ rate.rate }}</p>
      </div>
    </div>
  `,
})
export class ExchangeRates implements OnInit {
  rates: any[];
  loading = true;
  error: any;

  constructor(private readonly apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.rates = result.data?.rates;
        this.loading = result.loading;
        this.error = result.error;
      });
  }
}
```
