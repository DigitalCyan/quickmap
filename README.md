# QUICKMAP

Quickmap is a software designed to enable useage of a simple Arduino based keyboard for binding bash commands to them so they could be executed by (literally) a press of a button.

## The package structure

The package consists of two parts.

1. The Arduino code that runs on the Arduino itself reading the pinstates and sending corresponding serial port data.
2. The JavaScript serial data interpreter running a little package know as
[`serialport`](https://serialport.io/)

## Setup and configuration

### First and foremost

Make sure you have an arduino keyboard assembled. If you don't know how feel free to check the `arduino_example` folder of this project. It has the code and the schematic for making one.

If you're not doing this as root, make sure that you are alloed to write and read from your arduino device. Hook up the keyboard to your computer and using `chmod` grant the user rights to read and write from the device.

If your device is located on `/dev/ttyUSB0` (like in my case) command should be:
```
sudo chmod u+rw /dev/ttyUSB0
```

### Dependencies
In order to make sure the thing actually works we need to make sure the dependencies are installed. Make sure you have the following packages installed:

* nodejs
* npm

### Installing and running
Now, there is a little script I wrote that should automate this process completely named `run.sh` so going into the root directory of the project and running `./run.sh` should do the trick.

If you are unable to run it, make sure you have the permission to execute it. You can do so using `chmod`.

```
sudo chmod u+x run.sh
```

### The `run.sh` script
The script will first check if you have the required node modules installed. If you don't and you happen to be running it as a standard user, you will be notified of your missing dependencies. This will download the dependencies via `npm` and store them into the `node_modules` folder.

### Configuration
You may configure the software using a simple text editor and editing the `config.json` file at the root of the package.

The `config.json` consists of 3 properties:

1. `port` (data type: string)

    This property defines the location of the device on your system.

1. `binds` (data type: object)

    This property holds the binds between your serial messages and commands that they run. Make sure to check out the <b>Example</b> section.

1. `debug` (data type: bool)

    This property toggles the debug data on and off in case you wish to run the sowftware in the background and dont want to bother yourself with writing `> /dev/null` at the end of the line whilst executing it.

## Example
An example of `config.json` setup
```
{
    "port": "/dev/ttyUSB0",
    "binds":{
        "button_1": "code",
        "button_2": "google-chrome-stable",
        "button_3": "reboot"
    },
    "debug": false
}
```

The formating of the `actions` property as follows:

```
"<serial message>": "<command to run>"
```

You may add or remove these but be warned that you need to know the serial messages your Arduino sends to your computer in order to run a command.
