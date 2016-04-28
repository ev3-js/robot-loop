# robot-loop

Set up cycle shell loop for ev3-client

## Installation

    npm install robot-loop

## Usage

```js
var {loop, move, motor, out, sleep, read} = require('robot-loop')
loop(main, '192.168.1.100')

var steer = move('b', 'c')

function * main () {
  yield steer.rotations(1, 60, 0)
}
```

## API

### loop(main, address)

Connect the main function to the ev3-client run middleware and use it to create a cycle shell loop.

**Parameters**

`main`
- Type: **function**
-  generator function yielding ev3-client functions

`address`
- Type: **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
- string ip address of the robotLoop

### out(msg)

Create an out action to add a message to the current cycle-shell process.

`out`
- Type: **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
- The message to display

### [ev3-client API](http://github.com/ev3-js/ev3-client)

This package exposes the API from ev3-client
