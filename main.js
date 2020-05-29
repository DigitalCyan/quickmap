const SerialPort = require('serialport');

const device = '/dev/ttyUSB0'

const port = new SerialPort(device, {
    baudRate: 9600
})

port.on('data', (data) => {
    console.log(`${device} > ${data}`)
})