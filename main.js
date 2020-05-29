const SerialPort = require('serialport');
const Parser = require('./utils/Parser');
const parser = new Parser();

const device = parser.getDevice();

const port = new SerialPort(device, {
    baudRate: 9600
})

port.on('data', (data) => {
    console.log(`${device} > ${data}`);
    parser.parse(data);
})