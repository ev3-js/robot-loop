var test = require('tape')
var robotLoop = require('../lib/index')
var loop = robotLoop.loop
var out = robotLoop.out
var read = robotLoop.read
var move = robotLoop.move

const steer = move()

function main () {
  steer.rotations(1, 40, 0)
  steer.rotations(-1, 40, 0)
}

test('Regular function', function (t) {
  loop(main, '10.0.1.29')
})
