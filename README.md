# QUICKMAP

Quickmap is a software designed to enable useage of a simple Arduino based keyboard for binding bash commands to them so they could be executed by (literally) a press of a button.

## The package structure

The package consists of two parts.

1. The Arduino code that runs on the Arduino itself reading the pinstates and sending corresponding serial port data.
2. The JavaScript serial data interpreter running a little package know as
[`serialport`](https://serialport.io/)

## Configuration

You may configure the software using a simple text editor and editing the `config.json` file at the root of the package.