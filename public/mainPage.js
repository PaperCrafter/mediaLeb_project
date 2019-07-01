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
                        td.textContent = result.DBMaster[x].name;
                        td.className ='master'
                        td.addEventListener('click', (e) =>{

                        });
                    }

                    tr.appendChild(td);

                }
            }

            for(var i = 0; i<result.DBSlave.length; i++){
                let elem = document.querySelector(`#tbl_${result.DBSlave[i].master} #port_${result.DBSlave[i].port-1}`);
                elem.textContent = `port : ${result.DBSlave[i].port}`;
                elem.textContent = elem.textContent +` / ${result.DBSlave[i].skin}`
                elem.className = 'slave';
            }

        }
    }
/*
            let tbody = document.querySelector('#tblslave tbody');
            tbody.innerHTML ='';
            slaves.map((slave)=>{
                let row = document.createElement('tr');

                let td = document.createElement('td');
                td.textContent = slave.id;
                row.appendChild(td);

                td = document.createElement('td');
                td.textContent = slave.master;
                row.appendChild(td);
                
                td = document.createElement('td');
                td.textContent = slave.port;
                row.appendChild(td);
                
                td = document.createElement('td');
                td.textContent = slave.skin;
                row.appendChild(td);

                td = document.createElement('td');
                let sel = document.createElement('select');
                sel.id = `${slave.id}_skin`;

                addOption(sel, "None");
                addOption(sel, "LED");
                addOption(sel, "Motor");

                td.appendChild(sel);
                row.appendChild(td);
                

                td = document.createElement('td');
                let btn = document.createElement('button');
                btn.className = "btn btn-secondary confirm";
                btn.type="submit";
                btn.id=`${slave.id}_slave_confirm`;
                btn.textContent = "확인";
                btn.addEventListener('click', ()=>{
                    let xhr = new XMLHttpRequest();
                    xhr.onload = () => {
                        if(xhr.status === 200){
                            getSlave(id);
                        }
                        else{
                            console.error(xhr.responseText);
                        }
                    }
                    xhr.open('PATCH', '/adminSlave/' + slave.id);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    const sel = document.getElementById(`${slave.id}_skin`).value;
                    xhr.send(JSON.stringify({skin:sel, id:slave.id}));
                });

                td.appendChild(btn);
                row.appendChild(td);

                td = document.createElement('td');
                let remove = document.createElement('button');
                remove.className = "btn btn-secondary delete";
                remove.type="submit";
                remove.id=`${slave.id}_slave_delete`;
                remove.textContent = "제거";
                remove.addEventListener('click', ()=>{
                    let xhr = new XMLHttpRequest();
                    xhr.onload = () => {
                        if(xhr.status === 200){
                            getSlave(id);
                        }
                        else{
                            console.error(xhr.responseText);
                        }
                    };
                    xhr.open('DELETE', '/adminSlave/' + slave.id);
                    xhr.send();
                });

                td.appendChild(remove);
                row.appendChild(td);
                
                tbody.appendChild(row);
            })
        }
    }
    */
    xhr.open('GET', '/getModules');
    xhr.send();
}


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

        for(var j = 0; j <8; j++){
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
    console.log(nsp);

    socket.emit('ledS',port);

}


window.onload = () =>{
    loadModule();
    //slaveMovement();
    //masterMovement();
}