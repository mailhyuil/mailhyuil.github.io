# css grid layout

```html
<!-- 전체 화면을 12분할 후 content-center로 가운데 정렬 -->
<div class="grid content-center h-screen grid-cols-6 overflow-hidden bg-yellow-500 lg:grid-cols-12">
  <!-- 가로의 크기는 12분할 중 start-2, end-12로 가운데 분할을 사용  -->
  <div class="relative h-full bg-red-500 col-span-full lg:col-start-2 lg:col-end-12">
    <!-- 세로 비율을 유지하기 위해서 pt-[66.4]를 사용 -->
    <div class="relative w-full pt-[66.4%] bg-blue-500">
      <!-- 위에서 지정한 박스내에서 absolute로 크기를 지정 -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw_-_2.5rem_-_5px)] h-[calc(100vh_-_1.5rem)]"
      >
        <div
          class="relative w-full h-full overflow-hidden bg-white"
          style="
            translate: none;
            rotate: none;
            scale: none;
            transform: scale(0.5012, 0.5012);
          "
        >
          <img
            class="absolute top-0 left-0 object-cover w-full h-full transition-opacity duration-500 ease-out"
            alt=""
            src="https://images.prismic.io/pebble-website/65296356fbd9a45bcec815f4_Screenshot2023-10-13at17.33.30.png?auto=format%2Ccompress&amp;fit=max&amp;w=3840"
          />
        </div>
      </div>
    </div>
  </div>
</div>
```
