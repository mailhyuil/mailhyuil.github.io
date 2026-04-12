# ad google Ads google-ads-api

## install

```sh
npm i google-ads-api
```

## create client

```js
import { GoogleAdsApi } from "google-ads-api";

const client = new GoogleAdsApi({
  client_id: "<CLIENT-ID>",
  client_secret: "<CLIENT-SECRET>",
  developer_token: "<DEVELOPER-TOKEN>",
});
```

## create customer

```js
const customer = client.Customer({
  customer_id: "1234567890",
  refresh_token: "<REFRESH-TOKEN>",
});

// Also supports login & linked customer ids
const customer = client.Customer({
  customer_id: "1234567890",
  login_customer_id: "<LOGIN-CUSTOMER-ID>",
  linked_customer_id: "<LINKED-CUSTOMER-ID>",
  refresh_token: "<REFRESH-TOKEN>",
});
```

## retrieve resources

```js
import { enums } from "google-ads-api";

const campaigns = await customer.report({
  entity: "campaign",
  attributes: ["campaign.id", "campaign.name", "campaign.bidding_strategy_type", "campaign_budget.amount_micros"],
  metrics: ["metrics.cost_micros", "metrics.clicks", "metrics.impressions", "metrics.all_conversions"],
  constraints: {
    "campaign.status": enums.CampaignStatus.ENABLED,
  },
  limit: 20,
});
```
