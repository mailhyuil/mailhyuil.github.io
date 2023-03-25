# css accordion

```vue
<script lang="ts" setup>
const selected = ref<number | null>(1);
const container1 = ref();
</script>
<template>
  <div class="bg-gray-100 h-screen w-screen flex justify-center">
    <div class="mr-8">
      <h1 class="font-medium max-w-xl mx-auto pt-10 pb-4">Smooth Accordion</h1>
      <div class="bg-white max-w-xl mx-auto border border-gray-200">
        <ul class="shadow-box">
          <li class="relative border-b border-gray-200">
            <button type="button" class="w-full px-8 py-6 text-left border-b" @click="selected !== 1 ? (selected = 1) : (selected = null)">
              <div class="flex items-center justify-between">
                <span>Should I use reCAPTCHA v2 or v3?</span>
                <span class="ico-plus"></span>
              </div>
            </button>

            <div class="relative overflow-hidden transition-all max-h-0 duration-700" style="" ref="container1" :style="selected == 1 ? 'max-height: ' + container1.scrollHeight + 'px' : ''">
              <div class="p-6">
                <p>reCAPTCHA v2 is not going away! We will continue to fully support and improve security and usability for v2.</p>
                <p>reCAPTCHA v3 is intended for power users, site owners that want more data about their traffic, and for use cases in which it is not appropriate to show a challenge to the user.</p>
                <p>
                  For example, a registration page might still use reCAPTCHA v2 for a higher-friction challenge, whereas more common actions like sign-in, searches, comments, or voting might use
                  reCAPTCHA v3. To see more details, see the reCAPTCHA v3 developer guide.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="ml-8">
      <h1 class="font-medium max-w-xl mx-auto pt-10 pb-4">Smooth Collapse</h1>
      <div class="bg-white max-w-xl mx-auto border border-gray-200">
        <ul class="shadow-box">
          <li class="relative border-b border-gray-200">
            <button type="button" class="w-full px-8 py-6 text-left border-b" @click="selected !== 1 ? (selected = 1) : (selected = null)">
              <div class="flex items-center justify-between">
                <span>Should I use reCAPTCHA v2 or v3?</span>
                <span class="ico-plus"></span>
              </div>
            </button>

            <div class="relative overflow-hidden transition-all max-h-0 duration-700" style="" ref="container1" :style="selected == 1 ? 'max-height: ' + container1.scrollHeight + 'px' : ''">
              <div class="p-6">
                <p>reCAPTCHA v2 is not going away! We will continue to fully support and improve security and usability for v2.</p>
                <p>reCAPTCHA v3 is intended for power users, site owners that want more data about their traffic, and for use cases in which it is not appropriate to show a challenge to the user.</p>
                <p>
                  For example, a registration page might still use reCAPTCHA v2 for a higher-friction challenge, whereas more common actions like sign-in, searches, comments, or voting might use
                  reCAPTCHA v3. To see more details, see the reCAPTCHA v3 developer guide.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
```
