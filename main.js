const SerialPort = require('serialport');
const Mapper = require('./utils/Mapper');
const mapper = new Mapper();

const device = mapper.getDevice();

const port = new SerialPort(device, {
    baudRate: 9600
})

port.on('data', (data) => {
    if(mapper.debugMode){
        console.log(`${device} > ${data}`);
    }
    mapper.parse(data);
})