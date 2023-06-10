# mongoose index

```ts
const animalSchema = new Schema({
  name: String,
  type: String,
  tags: { type: [String], index: true }, // path level
});

animalSchema.index({ name: 1, type: -1 }); // schema level
```
