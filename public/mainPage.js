loadModule= () => {
    const wrapper = document.querySelector('.modules');
    var xhr = new XMLHttpRequest();
    xhr.onload=()=>{
        if(xhr.status === 200){
            
            let result = JSON.parse(xhr.responseText);
            console.log(result);

            for(var x=0; x<result.DBMaster.length; x++){
                let num = x / 2;
                num = Math.floor(num);
                let scndWrapper

                if(x % 2 == 0){
                    scndWrapper = document.createElement('div');
                    scndWrapper.className = 'scndWarapper';
                    scndWrapper.id = `scndWarapper_${num}`;
                    wrapper.appendChild(scndWrapper);
                }

                else{
                    scndWrapper = document.getElementById(`scndWarapper_${num}`);
                }

                let tbl = document.createElement('table');
                tbl.className = `tbl_${x}`;
                tbl.id = `tbl_${result.DBMaster[x].id}`;
                scndWrapper.appendChild(tbl);

                for(var y = 0; y < 9; y++){
                    let num = y / 3;
                    num = Math.floor(num);
                    //임시 생성
                    let tr;

                    if(y%3 == 0){
                        tr = document.createElement('tr');
                        tr.className = `tr_${num}`
                        tbl.appendChild(tr);
                    }

                    else{
                        tr = document.querySelector(`.tbl_${x} .tr_${num}`);             
                    }

                    const td = document.createElement('td');
                    td.className ='slave_disabled'
                    td.id = `port_${y}`

                    if(y == 4){
                        td.className ='master'
                        td.textContent = result.DBMaster[x].name + '/'+result.DBMaster[x].skin;
                        setModuleColor(result.DBMaster[x].skin, td);
                    }

                    tr.appendChild(td);

                }
            }

            for(var i = 0; i<result.DBSlave.length; i++){
                let elem = document.querySelector(`#tbl_${result.DBSlave[i].master} #port_${result.DBSlave[i].port-1}`);
                elem.textContent = `port : ${result.DBSlave[i].port}`;
                elem.textContent = elem.textContent +` / ${result.DBSlave[i].skin}`
                elem.className = 'slave';
                setModuleColor(result.DBSlave[i].skin, elem);
            }

            masterMovement();
            slaveMovement();

        }
    }

    xhr.open('GET', '/getModules');
    xhr.send();
}


setModuleColor = (skin, ui) =>{
    const clr = ['#ff99cc', '#66ccff','#99cc00', '#ffcc00', '#caa6fe' ];

    if(skin == 'None'){ui.style.backgroundColor = clr[0]}
    else if(skin=="LED"){ui.style.backgroundColor = clr[1]}
    else if(skin=="Kinetic"){ui.style.backgroundColor = clr[2]}
    else if(skin=="Sensor"){ui.style.backgroundColor = clr[3]}
    else if(skin=="Lightning"){ui.style.backgroundColor = clr[4]}
}


/*
setModuleColor = (skin, ui) =>{
    const xhr = new XMLHttpRequest();
    xhr.onload = () =>{

        const clr = ['#ff99cc','66ccff','99cc00','#ffcc00' ];

        if(xhr.status === 200){ 
            let result = JSON.parse(xhr.responseText);
            //console.log(skin);
            console.log('asd' + result.Skin[0].skin);
            if(skin==result.Skin[0].skin){ui.style.backgroundColor = clr[0]}
            else if(skin==result.Skin[1].skin){ui.style.backgroundColor = clr[1]}
            else if(skin==result.Skin[2].skin){ui.style.backgroundColor = clr[2]}
            else if(skin==result.Skin[3].skin){ui.style.backgroundColor = clr[3]}
        }
    }

    xhr.open('GET', '/instruction/getskin');
    xhr.send();
}
*/




masterMovement = () =>{
    const tbl = document.querySelectorAll('.modules table');
    for(var i = 0; i <tbl.length; i++){
        master = tbl[i].querySelector('.master');

        master.addEventListener('click', (e)=>{
            e.preventDefault();
            console.log(e.target.textContent)
            namespaceMaster(e.target.textContent);
        });
    }
}

slaveMovement = () => {
    const tbl = document.querySelectorAll('.modules table');

    for(var i = 0; i<tbl.length; i++){
        slave = tbl[i].querySelectorAll('.slave');
        master = tbl[i].querySelector('.master');

        for(var j = 0; j <slave.length; j++){
            slave[j].addEventListener('click', (e)=>{
                e.preventDefault();
                namespaceSlave('master1', e.target.textContent);
            });
        }
    }
    
}


namespaceMaster = (nsp) => {
    console.log('/' + nsp);
    const socket = io('/' + nsp);
    //console.log(socket);

    socket.emit('led');
    /*
    socket.on('off', (data) => {

        socket.emit('led:off');
    });
    */
}


namespaceSlave = (nsp, port) => {
    const socket = io('/' + nsp);
    console.log(nsp + ' : slave');

    socket.emit('ledS',port);

}


window.onload = () =>{
    loadModule();
}