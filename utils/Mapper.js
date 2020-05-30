const fs = require('fs');
const {exec} = require('child_process')

class Mapper{

    config = JSON.parse(fs.readFileSync('./config.json'));

    debugMode = this.config.debug

    getDevice = () => {
        return this.config.port
    }

    parse = (data) => {
        if(this.debugMode){
            console.log(`${this.config.binds[data]}`);
        }
        exec(`${this.config.binds[data]} &`);
    }

}

module.exports = Mapper;