# priority-queues

priority queue data structure using heap

[![Build Status](https://travis-ci.org/incessantmeraki/priority-queues.svg?branch=master)](https://travis-ci.org/incessantmeraki/priority-queues)

## Usage

### Example

```js
  var PQueue = require('priority-queues')
  
  p = newPQueue()
  
  // push elements into the queue
  p.push(4)
  p.push(2)
  p.push(1)

  //pop elements out of the queue
  p.pop() //1
  p.pop() //2
  p.pop() //4
```

### API

#### `p = new PQueue([arr])`
create new instance of priority queue. If arr given then creates the heap using this array otherwise empty queue

#### `p.push(element)`
pushes element into the heap structure

#### `p.pop()`
pops the first element(minimum one) from the heap structure

#### `d.size()`
returns the number of elements in the queue

#### `p.isEmpty()`
returns true if the queue is empty

## License

MIT
