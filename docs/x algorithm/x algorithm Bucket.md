# x algorithm Bucket

## Leaky Bucket

```js
class LeakyBucket {
  constructor(maxRequestPerSec) {
    this.capacity = maxRequestPerSec;
    this.used = 0;
    this.leakInterval = 1000 / maxRequestPerSec;
    this.lastLeakTime = Date.now();
  }

  allow() {
    this.leak();
    this.used++;
    if (this.used >= this.capacity) {
      return false;
    }
    return true;
  }

  leak() {
    const now = Date.now();
    if (now > this.lastLeakTime) {
      const millisSinceLastLeak = now - this.lastLeakTime;
      const leaks = Math.floor(millisSinceLastLeak / this.leakInterval);
      if (leaks > 0) {
        if (this.used <= leaks) {
          this.used = 0;
        } else {
          this.used -= leaks;
        }
        this.lastLeakTime = now;
      }
    }
  }
}
```

### usage 중인 플랫폼

```
Amazon MWS(Maketplace WEb Service)
NGINX
Uber-go rate limiter
Shopify
Guava RateLimiter
```

## Token Bucket

```js
class TokenBucket {
  constructor(maxRequestPerSec) {
    this.tokens = maxRequestPerSec;
    this.capacity = maxRequestPerSec;
    this.lastRefillTime = this.scaledTime();
  }

  allow() {
    this.refillTokens();
    if (this.tokens === 0) {
      return false;
    }
    this.tokens--;
    return true;
  }

  refillTokens() {
    const now = this.scaledTime();
    if (now > this.lastRefillTime) {
      const elapsedTime = now - this.lastRefillTime;
      const refill = Math.floor(elapsedTime * this.maxRequestPerSec);
      this.tokens = Math.min(this.tokens + refill, this.capacity);
      this.lastRefillTime = now;
    }
  }

  scaledTime() {
    return Math.floor(Date.now() / 1000);
  }
}
```

### usage 중인 플랫폼

```
AWS : API Gateway, EC2, EBS, CPU Credit
Spring Cloud Netflix Zuul
Bucket4j
```
