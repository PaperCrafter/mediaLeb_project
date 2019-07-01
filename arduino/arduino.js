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
        this.namespace;
        this.swch = 0;
    }

    connect(){
        this.board.once('ready', ()=>{
            console.log('IO Ready');

            this.boardConnected = new five.Board({io: this.board, repl: true});
            this.boardConnected.on('ready', ()=>{
                console.log('five ready');
                let led = new five.Led(13);
                led.on();
                this.boardConnected.pinMode(12, five.Pin.OUTPUT);
                this.boardConnected.digitalWrite(12, 1);
                console.log(this.name);
                this.namespace = global.io.of('/'+ `${this.name}`);
                console.log(this.namespace);

                this.namespace.on('connection', (soc)=>{
                    soc.on('led',()=>{
                        if(this.swch%2 == 0){
                            console.log('ledon!');
                            led.on();
                            this.swch++;
                        }else{
                            console.log('ledoff!');
                            led.off();
                            this.swch++;
                        }
                    });

                    soc.on('ledS', (data)=>{

                        let res = Number(data)+2
                        let mod = new five.Led(res);
                        console.log('led:off'+ res);
                        mod.on();

                        
                    });

                });

                this.namespace.on('led:on', ()=>{
                    namespace.emit('',)
                    console.log('led:on!');
                    led.on();
                });
                
                this.namespace.on('led:off', ()=>{
                    console.log('led:off!');
                    led.off();
                });

                for(var i =0; i < 8; i++){
                    this.namespace.on('led:on', (data)=>{
                        let mod = new five.Led(data+2);
                        console.log('led:off' + i);
                        mod.on();
                    });
    
                }
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

    func1(){}

    func2(){}

    func3(){}

    moveSlave(port){
        
    }

}

module.exports = arduino;
//led.blink(500);
//led.blink(500);