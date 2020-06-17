const SerialPort = require('serialport'); // This allows serial communication
const Mapper = require('./utils/Mapper'); // This is a Mapper class I wrote to make stuff cleaner

const mapper = new Mapper(); // We instatiate an instance of a class Mapper
const device = mapper.getDevice(); // We get the device path

// Here we declare a port we will use for communication
const port = new SerialPort(device, {
    baudRate: 9600 // It's important to make sure the baudrate is the same as on the device itself
})

// Here we set up an event listener lambda function to handle the serial input data
// It's importaint to understand that this function is asynchronous which means that be
// because the code is of non blocking nature the event listener will keep listening for events
// in the background which will make sure that the program doesnt just quit after hitting the
// end of the program

port.on('data', (data) => {
    // If the debug mode is on, we print the device and the data we recieved from it
    if(mapper.debugMode){
        console.log(`${device} > ${data}`);
    }
    // Here we pass the recieved data to the mapper
    mapper.parse(data);
})

// We tell the user everything is just fine
console.log('Quickmap initilized')
