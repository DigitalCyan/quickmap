const fs = require('fs');
const {exec} = require('child_process')

class Parser{
    config = JSON.parse(fs.readFileSync('./config.json'));

    getDevice = () => {
        return this.config.port
    }

    parse = (data) => {
        console.log(`${this.config.actions[data + '_action']}`)
        exec(`${this.config.actions[data + '_action']} &`);
    }
}

module.exports = Parser;