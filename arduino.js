const io = require('socket.io-client');
const config = require('./config');

var VirtualSerialPort = require('udp-serial').SerialPort;
var firmata = require('firmata');
var five = require("johnny-five");
// Connect to the socket server

//192.168.43.155
//192.168.43.50

class arduino{

    constructor(ip){
        this.ip = ip;
        console.log(this.ip);
        this.sp = new VirtualSerialPort({
            host: this.ip,
            type: 'udp4'
        });

        this.board = new firmata.Board(this.sp);
        this.board.isReady = true;
        this.socket = io.connect(config.url);
        this.boardConnected;
    }

    connect(){
        this.board.once('ready', ()=>{
            console.log('IO Ready');

            this.boardConnected = new five.Board({io: this.board, repl: true});
            this.boardConnected.on('ready', ()=>{
                console.log('five ready');
                let led = new five.Led(13);
                led.blink(500);

                this.boardConnected.pinMode(12, five.Pin.OUTPUT);
                this.boardConnected.digitalWrite(12, 1);

                this.socket.on('led:on', ()=>{
                    led.on();
                });
                
                  // Turn LED off when event led:off is received
                this.socket.on('led:off', ()=>{
                    led.off();
                });
            })
        })
    }

    confirm(){
        new Promise((resolve, reject)=>{
            
            const ardu = new master(this.ip);
        }).then(()=>{
            console.log('접속 성공');
        }).catch(()=>{
            console.log('접속 실패');
        });
    }

}

module.exports = arduino;
//led.blink(500);
//led.blink(500);