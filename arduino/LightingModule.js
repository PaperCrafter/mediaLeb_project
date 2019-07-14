const arduino = require('./arduino');
const VirtualSerialPort = require('udp-serial').SerialPort;
const firmata = require('firmata');
const five = require("johnny-five");
// Connect to the socket server

//192.168.43.155
//192.168.43.50

class LightningModule extends arduino{
    constructor(ip, name, soc){
        super(ip,name,soc);
    }


    func1(){

    }

    func2(){

    }

    func3(){

    }
}

module.exports = LightningModule;