
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
    console.log('sssss');

    socket.emit('ledS',port);

}


window.onload = () =>{
    slaveMovement();
    masterMovement();
}