# tailwindcss

## scroll snap

```
<div class="container flex flex-col gap-6 p-5">
  <div>
    <h1 class="text-xl font-bold">상하로 Snap</h1>

    <div class="h-96 w-96 snap-y snap-mandatory overflow-y-scroll">
      <div class="flex h-96 w-96 snap-center items-center justify-center bg-red-400 text-xl text-white">1</div>
      <div class="flex h-96 w-96 snap-center items-center justify-center bg-green-400 text-xl text-white">2</div>
    </div>
  </div>

  <div>
    <h1 class="text-xl font-bold">좌우로 Snap</h1>

    <div class="flex h-96 w-96 snap-x snap-mandatory overflow-x-scroll">
      <div class="flex aspect-square flex-1 snap-center items-center justify-center bg-red-400 text-xl text-white">1</div>
      <div class="flex aspect-square flex-1 snap-center items-center justify-center bg-green-400 text-xl text-white">2</div>
    </div>
  </div>
</div>
```
