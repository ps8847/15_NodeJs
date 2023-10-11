// event modules
// node js has a build-in moule, called "events",
//where you can create, fire, and listen for your own events.

//example 1: registering for the event to be fired only one time using once.
//example 2 : create an event instance and register a couple of callbacks
//example 3 : registering for the event with callback parameters

const EventEmitter = require("events");

const event = new EventEmitter();

//1
event.on("saymyname", () => {
    console.log("your name is prince");
})

event.on("saymyname", () => {
    console.log("your name is prince sharma");
})

event.emit("saymyname");


// with parameter
event.on("checkpage", (sc, msg) => {
    console.log(`status is ${sc} and the page is ${msg}`);
})

event.emit("checkpage", 200, "ok");