
console.log('Hello There');

setTimeout(()=> {
    console.log('setTimeout');
},0); // executes after current event loop finishes all the executions & as soon as timeout completes

setImmediate(() => {
    console.log ('setImmediate is executed');
});  // setTimeout with 0 ms

process.nextTick(() => {
    console.log('nextTick it is..');
});     //invoke the function immediately after current operation completes