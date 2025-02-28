const color = 'red';

function start(){
    const message = 'hi'
    const color = 'blue';
    console.log(color);
    console.log(message);
}

start();

function stop(){
    const message = 'bye'
    console.log(message)
}
stop();

// the global variables can be accessed anywhere but
// the local variables are limited within their blocks.
// local variabes take precedence over a global variable.