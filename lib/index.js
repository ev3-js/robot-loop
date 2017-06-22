'use strict';

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

var _require = require('ev3-client'),
    robot = _require.robot,
    move = _require.move,
    motor = _require.motor,
    sleep = _require.sleep,
    read = _require.read,
    runAction = _require.runAction;

var firebaseConfig = {
  apiKey: 'AIzaSyA1Ib5i5HZPCxnKp4ITiUoy5VEKaLMdsDY',
  authDomain: 'play-ev3.firebaseapp.com',
  databaseURL: 'https://play-ev3.firebaseio.com'
};

module.exports = {
  loop: robotLoop,
  move: move,
  motor: motor,
  sleep: sleep,
  read: read,
  out: _cycleShell.out
};

function robotLoop(main, address) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var addresses = Array.isArray(address) ? address : [address];
  var mw = addresses.map(function (a) {
    return robot(a, opts).mw;
  });
  var game = opts.game,
      teamColor = opts.teamColor,
      teamName = opts.teamName;

  var count = (0, _cycleShell2.default)((0, _yoco.composable)(mw)((0, _compose2.default)(runAction, (0, _flattenGen2.default)(main))), {
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