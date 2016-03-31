import 'babel-polyfill'
import compose from '@f/compose'
import flatten from '@f/flatten-gen'
import {composable} from 'yoco'
import cycle, {out} from 'cycle-shell'
var {robot, move, motor, sleep, read, runAction} = require('ev3-client')

module.exports = {
  loop: robotLoop,
  move,
  motor,
  sleep,
  read,
  out
}

function robotLoop (main, address) {
  var run = robot(address)
  cycle(composable([run.mw])(compose(runAction, flatten(main))), {
    title: 'ev3'
  })
  return run
}
