# next base api - backend

## app/api/hello/route.ts

```ts
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  return NextResponse.json({ message: "Hello World" });
}
export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ message: "Hello World", data });
}
export async function PUT(request: Request) {
  const data = await request.json();
  return NextResponse.json({ message: "Hello World", data });
}
export async function DELETE(request: Request) {
  const data = await request.json();
  return NextResponse.json({ message: "Hello World", data });
}
```
