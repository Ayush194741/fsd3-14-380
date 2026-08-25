console.log("1: start");
setTimeout(() => console.log ("2:setTimeout"),0);
setImmediate(() => console.log ("3:setImmediate"),0);
process.nextTick(() => console.log ("4:nextTick"),0);
console.log("5: end");
// in most processors immediate and timeout swap