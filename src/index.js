/**
 * Imports
 */
import 'babel-polyfill'
import compose from '@f/compose'
import flatten from '@f/flatten-gen'
import {composable} from 'yoco'
import cycle, {out} from 'cycle-shell'
import io from 'socket.io-client'

/**
 * destructure ev3-client functions
 */
var {robot, move, motor, sleep, read, runAction} = require('ev3-client')

/**
 * Exports
 * @type {Object}
 */
module.exports = {
  loop: robotLoop,
  move,
  motor,
  sleep,
  read,
  out
}

/**
 * Connect the main function to the ev3-client run middleware and use it to create a cycle shell loop
 * @param  {fn} main           generator function yielding ev3-client functions
 * @param  {string} address    string ip address of the robotLoop
 */
function robotLoop (main, address, opts = {}) {
  var run = robot(address, opts)
  var {judgeId, judgeIp = 'http://judge.ev3.sh'} = opts
  var count = cycle(composable([run.mw])(compose(runAction, flatten(main))), {
    title: 'ev3'
  })

  if (judgeId) {
    var socket = io.connect(judgeIp)
    count((num) => socket.emit('command', {id: judgeId, num}))
  }
}
