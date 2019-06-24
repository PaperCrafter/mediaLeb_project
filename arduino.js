const io = require('socket.io-client');
const config = require('./config');

var VirtualSerialPort = require('udp-serial').SerialPort;
var firmata = require('firmata');
var five = require("johnny-five");
// Connect to the socket server

//192.168.43.155
//192.168.43.50

class arduino{

    constructor(ip, name, soc){
        this.name = name;
        this.ip = ip;
        console.log(this.ip);
        this.sp = new VirtualSerialPort({
            host: this.ip,
            type: 'udp4'
        });

        this.board = new firmata.Board(this.sp);
        this.board.isReady = true;
        this.socket = soc;
        this.boardConnected;
    }

    connect(){
        this.board.once('ready', ()=>{
            console.log('IO Ready');

            /*
            const namespace1 = io.of('/namespace1');
            // connection을 받으면, news 이벤트에 hello 객체를 담아 보낸다
            namespace1.on('connection', (socket) => {
              namespace1.emit('news', { hello: 'Someone connected at namespace1' });
            });
            */

            this.boardConnected = new five.Board({io: this.board, repl: true});
            this.boardConnected.on('ready', ()=>{
                console.log('five ready');
                let led = new five.Led(13);
                led.blink(500);

                this.boardConnected.pinMode(12, five.Pin.OUTPUT);
                this.boardConnected.digitalWrite(12, 1);

                this.socket.of(`${this.name}`);

                this.socket.on('led:on', ()=>{
                    led.on();
                });
                
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