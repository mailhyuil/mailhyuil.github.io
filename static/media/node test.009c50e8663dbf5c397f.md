# node test

## index.test.js

```
import test from 'node:test';
import assert from 'node:assert'

import {makeCoffee} from './index.js'

test('makeCoffee 가 잘 작동하는 지 확인',()=>{
  // given
  const orderCount = 3;
  const orderMenu = 'americano'

  // when
  const result = makeCoffee(orderCount, orderMenu)

  // then
  const expected = ['물, 커피원두','물, 커피원두','물, 커피원두']
  assert.deepEqual(expected, result)
  })
```
