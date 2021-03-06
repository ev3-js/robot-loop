/**
 * Imports
 */

import cycle, {out} from 'cycle-shell'
import 'regenerator-runtime/runtime'
import flatten from '@f/flatten-gen'
import compose from '@f/compose'
import firebase from 'firebase'
import {composable} from 'yoco'

/**
 * destructure ev3-client functions
 */
var {robot, move, motor, sleep, read, runAction} = require('ev3-client')
const firebaseConfig = {
  apiKey: 'AIzaSyA1Ib5i5HZPCxnKp4ITiUoy5VEKaLMdsDY',
  authDomain: 'play-ev3.firebaseapp.com',
  databaseURL: 'https://play-ev3.firebaseio.com'
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
  const addresses = Array.isArray(address)
    ? address
    : [address]
  var mw = addresses.map(a => robot(a, opts).mw)
  var {game, teamColor, teamName} = opts
  var count = cycle(composable(mw)(compose(runAction, flatten(main))), {
    title: 'ev3'
  })

  if (game) {
    firebase.initializeApp(firebaseConfig)
    var ref = firebase.database().ref(`games/${game}/teams/${teamName}`)
    initJudge()
  }

  function initJudge () {
    ref.set({
      name: teamName,
      color: teamColor,
      commands: 0,
      points: 0
    })
    count((num) => ref.child('commands').transaction(function (num) {
      return num++
    }))
  }
}
