'use strict';

require('babel-polyfill');

var _compose = require('@f/compose');

var _compose2 = _interopRequireDefault(_compose);

var _flattenGen = require('@f/flatten-gen');

var _flattenGen2 = _interopRequireDefault(_flattenGen);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _yoco = require('yoco');

var _cycleShell = require('cycle-shell');

var _cycleShell2 = _interopRequireDefault(_cycleShell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * destructure ev3-client functions
 */
/**
 * Imports
 */

var _require = require('ev3-client');

var robot = _require.robot;
var move = _require.move;
var motor = _require.motor;
var sleep = _require.sleep;
var read = _require.read;
var runAction = _require.runAction;

var firebaseConfig = {
  apiKey: 'AIzaSyA1Ib5i5HZPCxnKp4ITiUoy5VEKaLMdsDY',
  authDomain: 'play-ev3.firebaseapp.com',
  databaseURL: 'https://play-ev3.firebaseio.com'
};

/**
 * Exports
 * @type {Object}
 */
module.exports = {
  loop: robotLoop,
  move: move,
  motor: motor,
  sleep: sleep,
  read: read,
  out: _cycleShell.out
};

/**
 * Connect the main function to the ev3-client run middleware and use it to create a cycle shell loop
 * @param  {fn} main           generator function yielding ev3-client functions
 * @param  {string} address    string ip address of the robotLoop
 */
function robotLoop(main, address) {
  var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var run = robot(address, opts);
  var game = opts.game;
  var teamColor = opts.teamColor;
  var teamName = opts.teamName;

  var count = (0, _cycleShell2.default)((0, _yoco.composable)([run.mw])((0, _compose2.default)(runAction, (0, _flattenGen2.default)(main))), {
    title: 'ev3'
  });

  if (game) {
    _firebase2.default.initializeApp(firebaseConfig);
    var ref = _firebase2.default.database().ref('games/' + game + '/teams/' + teamName);
    initJudge();
  }

  function initJudge() {
    ref.set({
      name: teamName,
      color: teamColor,
      commands: 0,
      points: 0
    });
    count(function (num) {
      return ref.child('commands').transaction(function (num) {
        return num++;
      });
    });
  }
}