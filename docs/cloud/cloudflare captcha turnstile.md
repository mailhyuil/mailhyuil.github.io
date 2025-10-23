# cloudflare captcha turnstile

## frontend

```html
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>

<form action="/verify" method="POST">
  <div class="cf-turnstile" data-sitekey="YOUR_SITE_KEY"></div>
  <button type="submit">Submit</button>
</form>
```

## backend

```ts
app.post("/verify", async (req, res) => {
  const turnstileResponse = req.body["cf-turnstile-response"];

  const secretKey = "YOUR_SECRET_KEY"; // Cloudflare에서 제공한 Secret Key
  const verifyURL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

  try {
    const response = await axios.post(
      verifyURL,
      new URLSearchParams({
        secret: secretKey,
        response: turnstileResponse,
      }).toString(),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      },
    );

    if (response.data.success) {
      res.send("Turnstile verification successful!");
    } else {
      res.status(400).send("Turnstile verification failed.");
    }
  } catch (error) {
    res.status(500).send("Error verifying Turnstile response.");
  }
});
```
