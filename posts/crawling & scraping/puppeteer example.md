# puppeteer example

```ts
import dayjs from "dayjs";
import puppeteer from "puppeteer";
import isEmpty from "lodash/isEmpty";

export type ScrapData = {
  title: string;
  date: string;
  time: string;
  host: string;
};
export const scrap = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto("https://www.example.go.kr/cms/admin/login.cs", {
    waitUntil: "domcontentloaded",
  });

  await page.click("#id");
  await page.keyboard.type("test");

  await page.click("#password");
  await page.keyboard.type("test");

  await page.click('.btn.btn-primary.btn-block[type="submit"]');

  let count = 230;
  let isDataExist = true;
  let totalData: ScrapData[] = [];
  while (isDataExist) {
    await page.goto(`https://www.example.go.kr/cms/admin/schedule/C0001.cs?pageIndex=${count++}`, {
      waitUntil: "domcontentloaded",
      headless: false,
    });

    const pageData = await page.evaluate(() => {
      const tbody = document.querySelector("tbody");
      if (!tbody) return;
      const children = tbody.children;
      if (children) {
        const childArray = Array.from(children);
        return childArray.reduce((prev, cur) => {
          const title = cur.querySelector("td:nth-child(2)")?.textContent?.replace(/\s/g, "");
          const date = cur.querySelector("td:nth-child(3)")?.textContent?.replace(/\s/g, "");
          const time = cur.querySelector("td:nth-child(4)")?.textContent?.replace(/\s/g, "");
          const host = cur.querySelector("td:nth-child(5)")?.textContent?.replace(/\s/g, "");

          if (!title || !date || !time || !host) {
            prev.push({});
          } else {
            const data: ScrapData = { title, date, time, host };
            prev.push(data);
          }

          return prev;
        }, [] as (ScrapData | {})[]);
      }
    });

    if (!pageData || !pageData.length || !isEmpty(pageData[0])) {
      totalData = [...totalData, ...pageData];
    } else {
      isDataExist = false;
    }
  }

  await browser.close();
};

scrap();
```
