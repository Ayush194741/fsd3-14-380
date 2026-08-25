const f1 = () => {
  console.log("f1 starts");
  f2();
  console.log("f1 running");
  console.log("f1 end");
};
const f2 = () => {
  console.log("f2 starts");
  f3();
  console.log("f2 running");
  console.log("f2 ends");
};
const f3 = () => {
  console.log("f3 starts");
  console.log("f3 running");
  console.log("f3 end");
};
function main() {
  console.log("main");
  f1();
  console.log("end main");
}
main();

//this is synchronus call
//javascript is synchronus and single threaded
//in asynchronus we use eventloop to manage the call stack
//Asynchronus call using timers-
//1. set timeout
//2. set immediate
//3. process.next tick
//4.set interval