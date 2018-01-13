module.exports = PQueue

function PQueue(elements) {
  this._h = []

  if (Array.isArray(elements)) {
    this._h = elements

    for (let i = Math.floor(this._h.length / 2) - 1; i >= 0; i--)
      this._percolateDown(i)
  }
}

PQueue.prototype.size = function () {
  return this._h.length
}

PQueue.prototype.isEmpty = function () {
  return this._h.length === 0
}

PQueue.prototype.push = function (val) {
  this._h.push(val)
  var i = this._h.length - 1
  while (true) {
    if (i === 0) return
    let parent = Math.floor((i - 1) / 2)
    if (this._h[parent] > this._h[i]) {
      let tmp = this._h[i]
      this._h[i] = this._h[parent]
      this._h[parent] = tmp
      i = parent
    }
    else {
      return
    }
  }
}

PQueue.prototype._percolateDown = function (index) {
  var lc, rc
  var tmp

  while (true) {
    lc = index * 2 + 1
    rc = lc + 1
    if (lc >= this._h.length) return
    if (rc === this._h.length || this._h[lc] <= this._h[rc]) {
      if (this._h[lc] < this._h[index]) {
        tmp = this._h[lc]
        this._h[lc] = this._h[index]
        this._h[index] = tmp
        index = lc
      }
      else {
        return
      }
    }
    else if (this._h[rc] < this._h[index]) {
      tmp = this._h[rc]
      this._h[rc] = this._h[index]
      this._h[index] = tmp
      index = rc
    }
    else {
      return
    }
  }
}

PQueue.prototype.pop = function () {
  var retVal, tmp, index, lc, rc

  if (this._h.length === 0) {
    return "Pop called on an empty Priority Queue\n"
  }

  retVal = this._h[0]
  this._h[0] = this._h[this._h.length - 1]
  this._h.pop()
  if (this._h.length === 0)
    return retVal
  this._percolateDown(0)
  return retVal
}
