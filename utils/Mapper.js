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
            console.log(`${this.config.actions[data + '_action']}`);
        }
        exec(`${this.config.actions[data + '_action']} &`);
    }

}

module.exports = Mapper;