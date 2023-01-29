# html canvas 애니메이션

## setInterval

## requestAnimationFrame

```
      const canvas = document.querySelector("#myCanvas");
      const ctx = canvas.getContext("2d");

      let x = 0;

      const animate = () => {
        // background
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // 도형 그리기
        ctx.fillStyle = "red";
        ctx.fillRect(x, 0, 10, 10);
        x++;
        requestAnimationFrame(animate); // 재귀함수
      };
      requestAnimationFrame(animate); // 재귀함수 호출
```
