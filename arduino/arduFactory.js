class arduFactory{
    constructor(ip, name, soc, skin){
        this.name = name;
        this.ip = ip;
        this.socket = soc;
        this.skin = skin;
    }

    makeArdu(){
        if(skin == "None"){
            return new arduino(ip, name, soc);
        }
        else if(skin == "LED"){
            return new LEDModule(ip, name, soc);
        }
        else if(skin == "Kinetic"){
            return new KineticModule(ip, name, soc);
        }
        else if(skin == "Sensor"){
            return new SensorModule(ip, name, soc);
        }
        else if(skin == "Lightning"){
            return new LightningModule(ip, name, soc);
        }
    }
}

module.exports = arduFactory;