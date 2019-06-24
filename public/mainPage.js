
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
                console.log(e.target.textContent)
                console.log(master.textContent);
                namespaceSlave(master.textContent, e.target.textContent);
            });
        }
    }
    
}


namespaceMaster = (nsp) => {
    const socket = io('/namespace' + nsp);
        socket.on('news', (data) => {

        console.log(nsp);
        socket.emit('led:off');
    });
}


namespaceSlave = (nsp, port) => {
    const socket = io('/namespace' + nsp);
        socket.on('news', (data) => {

        console.log(nsp + ' ' + port);
        socket.emit('led:off');
    });
}


window.onload = () =>{
    slaveMovement();
    masterMovement();
}