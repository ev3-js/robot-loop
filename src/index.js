/**
 * Imports
 */
import 'babel-polyfill'
import compose from '@f/compose'
import flatten from '@f/flatten-gen'
import io from 'socket.io-client'
import firebase from 'firebase'
import {composable} from 'yoco'
import cycle, {out} from 'cycle-shell'

/**
 * destructure ev3-client functions
 */
var {robot, move, motor, sleep, read, runAction} = require('ev3-client')
const firebaseConfig = {
  apiKey: "AIzaSyA1Ib5i5HZPCxnKp4ITiUoy5VEKaLMdsDY",
  authDomain: "play-ev3.firebaseapp.com",
  databaseURL: "https://play-ev3.firebaseio.com",
  storageBucket: "play-ev3.appspot.com",
}

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
  var {game, teamColor, teamName, judgeIp = 'http://play.ev3.sh'} = opts
  var count = cycle(composable([run.mw])(compose(runAction, flatten(main))), {
    title: 'ev3'
  })

  if (game) {
    firebase.initializeApp(firebaseConfig)
    var ref = firebase.db().ref(`games/${game}/teams`)
    initJudge()
  }

  function initJudge () {
    ref.push({
      name: teamName,
      color: teamColor
    })
    count((num) => ref.update({
      num
    }))
  }
}
