# v-count-increment

## plugins

```
import { Directive } from "nuxt/dist/app/compat/capi"

export default defineNuxtPlugin((nuxtapp) => {
    nuxtapp.vueApp.directive('count-increment', <Directive<HTMLElement, number>>{
        mounted(el, { value }) {

            value = Math.round(value);

            if (!value) {
                el.innerHTML = '0';
                return;
            }

            let now = value;
            const count = setInterval(() => {
                el.innerHTML = Math.ceil(value - now).toString();

                if (now < 1) {
                    clearInterval(count);
                }

                const step = now / 10;

                now -= step;
            }, 25);
        }
    })
})
```

## usage

```
<h1 v-count-increment="after.total">0</h1>
```
