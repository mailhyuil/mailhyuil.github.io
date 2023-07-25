# firebase.json

```json
{
  "public": "dist/angular",
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  },
  "hosting": [
    {
      "target": "angular",
      "source": ".",
      "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
      "frameworksBackend": {
        "region": "us-central1"
      }
    }
  ]
}
```
