const fs = require('fs'); // Allows us to read and write to the filesystem
const {exec} = require('child_process') // We need this to run commands in the hsell

class Mapper{

    config = JSON.parse(fs.readFileSync('./config.json')); // Here we read the serialized object data and parse it into an actual object

    debugMode = this.config.debug // Set debugMode to it's respective value in the config object

    // This function returns the defined device path from the config object
    getDevice = () => {
        return this.config.port
    }

    // This function takes given serial input data and runs a correspondig command
    parse = (data) => {
        // First we check if the debug mode is on
        if(this.debugMode){
            // If it is, we tell the user what command is about to run
            console.log(`${this.config.binds[data]}`);
        }
        // Here we use the given data to get the command to execute and then execute it
        exec(`${this.config.binds[data]} &`);
    }

}

// We do an module export to allow the mapper to be used in an another script
module.exports = Mapper;