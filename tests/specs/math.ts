import { test } from 'uvu'
import * as assert from 'uvu/assert'
import * as math from '../../src/math'

test('sum', () => {
  assert.type(math.sum, 'function')
  assert.is(math.sum(1, 2), 3)
  assert.is(math.sum(-1, -2), -3)
  assert.is(math.sum(-1, 1), 0)
})

test.run()
