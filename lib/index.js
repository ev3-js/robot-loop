import 'babel-polyfill'
import compose from '@f/compose'
import flatten from '@f/flatten-gen'
import {composable} from 'yoco'
var {robot, move, sleep, read, runAction} = require('ev3-client')
import {out}, cycle from 'cycle-shell'

module.exports = {
  loop: robotLoop,
  move,
  sleep,
  read,
  out
}

function robotLoop (main, address) {
  var run = robot(address)
  cycle(composable([run.mw])(compose(runAction, flatten(main))))
  return run
}
