# 

Imports

# actions

Imports

# actions

Imports

# degrees

Run drive motors for a number of degrees

**Parameters**

-   `degrees` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** degrees to turn motor
-   `speed` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** speed at which to turn motors
-   `turn` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** turn direction
-   `deg`  

# degrees

Run drive motors for a number of degrees

**Parameters**

-   `degrees` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** degrees to turn motor
-   `deg`  
-   `speed` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** speed at which to turn motors
-   `turn` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** turn direction

# forever

Run motors forever

**Parameters**

-   `speed` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** speed of motor
-   `opts` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** object of optional params

# forever

Run motors forever

**Parameters**

-   `speed` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** speed of motor
-   `turn`  
-   `opts` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** object of optional params

# index

Exports

# motor

Expose MoveSteering

# motorDefaults

Vars

# motorDefaults

Vars

# move

Expose move

# otherSpeed

Calculate off wheel speed

**Parameters**

-   `turn` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `speed` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** speed of the off motor

# require

destructure ev3-client methods

# robot

Connect to robot

**Parameters**

-   `address` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** ip address of robotLoop
-   `opts` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** default sensor modes object

Returns **dispatch** action dispatcher and run middleware stack

# robotLoop

Connect the main function to the ev3-client run middleware and use it to create a cycle shell loop

**Parameters**

-   `main` **fn** generator function yielding ev3-client functions
-   `address` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** string ip address of the robotLoop

# rotations

Run drive motors for a number of rotations

**Parameters**

-   `rotations` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** number of rotations to turn the motor
-   `rots`  
-   `speed` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** speed at which to turn motors
-   `turn` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** turn direction

# rotations

Run drive motors for a number of rotations

**Parameters**

-   `rotations` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** number of rotations to turn the motor
-   `speed` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** speed at which to turn motors
-   `turn` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** turn direction
-   `rots`  

# stop

Stops motors

# stop

Stops motors

# timed

Run drive motors for a specified amount of time

**Parameters**

-   `time` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** time to run the motors for (in milliseconds)
-   `speed` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** speed at which to turn motors
-   `turn` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** turn direction

# timed

Run drive motors for a specified amount of time

**Parameters**

-   `time` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** time to run the motors for (in milliseconds)
-   `speed` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** speed at which to turn motors
-   `turn` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** turn direction

# turnToDegrees

Params for degrees based on turn

**Parameters**

-   `turn` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `speed` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
-   `degrees` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** opts    object of degrees and speed for each motor

# turnToSpeeds

Convert turn in to left and right speeds

**Parameters**

-   `turn` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** \-100 to 100
-   `speed` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

# writeAndWait

Reset motors

**Parameters**

-   `command`  
-   `opts`  
