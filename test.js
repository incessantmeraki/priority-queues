
var test = require('tape')
var PQueue = require('./index.js')


test('test for individual values', function (t) {
  p = new PQueue()

  var vals = [21, 54, 79, 85, 88]
  p.push(54)
  p.push(21)
  p.push(88)
  p.push(79)
  p.push(85)

  var result = []

  const size = p.size()
  for (let i = 0; i < size; i++) {
    result.push(p.pop())
  }

  t.equal(result.join(), vals.join())
  t.end()
})

test('test when array is passed)', function (t) {
  var vals = [54, 21, 85, 79, 88]
  var valCopy = Array.from(vals)
  p = new PQueue(vals)

  var result = []
  for (let i = 0; i < 5; i++) {
    result.push(p.pop())
  }
  t.equal(result.join(), valCopy.sort().join())
  t.end()
})