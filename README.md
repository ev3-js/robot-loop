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

### 

Imports

### index

Exports

### robotLoop

Connect the main function to the ev3-client run middleware and use it to create a cycle shell loop

**Parameters**

-   `main` **fn** generator function yielding ev3-client functions
-   `address` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** string ip address of the robotLoop
