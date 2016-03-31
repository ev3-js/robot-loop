var test = require('tape')
var robotLoop = require('../lib/index')
var loop = robotLoop.loop
var out = robotLoop.out
var read = robotLoop.read
var move = robotLoop.move

function main () {
  return 'blah'
}

test('Regular function', function (t) {
  loop(main, '192.168.1.6')
})
