# postgres query CONSTRAINT FOREIGN KEY

```sql
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(20) NOT NULL,
  content TEXT NOT NULL,
  user_id SERIAL,
  CONSTRAINT fk_users_posts FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);
```
