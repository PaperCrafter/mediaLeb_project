//master 클릭 시 slave 로드
[].forEach.call(document.querySelectorAll('#tblardu tr'), (el)=>{
    el.addEventListener('click', ()=>{
        let id = el.querySelector('td').textContent;
        getSlave(id);
    });
});

//slave 로딩
getSlave = (id)=>{
    var xhr = new XMLHttpRequest();
    xhr.onload=()=>{
        if(xhr.status === 200){
            let slaves = JSON.parse(xhr.responseText);
            console.log(slaves);
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
                addOption(sel, "Kinetic");
                addOption(sel, "Sensor");
                addOption(sel, "Lightning");

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
    xhr.open('GET', '/adminSlave/'+id);
    xhr.send();
}

//slave 추가
document.getElementById('slaveRegister').addEventListener('submit',(e)=>{
    e.preventDefault();
    const id = e.target.id.value;
    const port = e.target.port.value;
    const skin = e.target.skin.value;

    const cnfId =   /^\d{1,3}$/;
    const cnfPort = /^[1-8]$/;
    
    //올바른 값인지 검증
    if(!id){
        return alert('master id를 입력하시오');
    }
    if(!port){
        return alert('포트번호를 입력하시오');
    }
    if(!skin){
        return alert('연결된 모듈의 skin종류를 입력하시오.');
    }

    if(!cnfId.test(id)){

        return alert('id는 정수값이어야 합니다.');
    }

    if(!cnfPort.test(port)){
        return alert('포트번호는 1-8사이의 정수값입니다.');
    }

    
    let xhr = new XMLHttpRequest();
    xhr.onload =() =>{
        if(xhr.status === 201){
            console.log(xhr.responseText);
            getSlave(id);
        }else{
            console.log(xhr.responseText);
        }
    };

    xhr.open('POST', '/adminSlave');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({id:id, port:port, skin:skin}));
    e.target.id.value = '';
    e.target.port.value = '';
    e.target.skin.value = '';
})

//masterbot 로딩
getMasterBots=()=>{

    var xhr = new XMLHttpRequest();
    xhr.onload = ()=>{
        if(xhr.status == 200){
            var master = JSON.parse(xhr.responseText);
            console.log(master);
            
            var tbody = document.querySelector('#tblardu tbody');
            tbody.innerHTML ="";
            master.map((master)=>{
                var tr = document.createElement('tr');
                var td = document.createElement('td');
                td.textContent = master.id;
                tr.appendChild(td);
                
                var td = document.createElement('td');
                td.textContent = master.name;
                tr.appendChild(td);
                
                var td = document.createElement('td');
                td.textContent = master.ip;
                tr.appendChild(td);

                var td = document.createElement('td');
                td.textContent = master.skin;
                tr.appendChild(td);

                var td = document.createElement('td');
                var sel = document.createElement('select');
                sel.id = `${master.id}_master_skin`;
                sel.className = "form-control"

                /*
                for (const i in skin){
                    addOption(sel, i.skin);
                    console.log(i.skin);
                }
                */

                addOption(sel, "None");

                addOption(sel, "LED");
                addOption(sel, "Kinetic");
                addOption(sel, "Sensor");
                addOption(sel, "Lightning");
                
                td.appendChild(sel);
                tr.appendChild(td);
                
                var td = document.createElement('td');
                var btn = document.createElement('button');
                btn.className = "btn btn-secondary confirm";
                btn.type="submit";
                btn.id=`${master.id}_confirm`;
                btn.textContent = "확인";
                td.appendChild(btn);
                tr.appendChild(td);

                var td = document.createElement('td');
                var btn = document.createElement('button');
                btn.className = "btn btn-secondary delete";
                btn.type="submit";
                btn.id=`${master.id}_delete`;
                btn.textContent = "제거";
                td.appendChild(btn);
                tr.appendChild(td);
                
                tbody.appendChild(tr);
            });
            addDeleteEvent();
            skinSelectEvent();
        }else{
            console.log('error!!');
        }
    };
    xhr.open('GET', '/admin/getList');
    xhr.send();
}

//master 추가
document.getElementById('masterRegister').addEventListener('submit',(e)=>{
    e.preventDefault();
    let name = e.target.name.value;
    let ip = e.target.ip.value;
    let skin = e.target.skin.value;

    const cnfName = /^[0-9a-zA-Z]+$/;
    const cnfIp = /^\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}$/;

    console.log(cnfName.test(name));
    //입력값검증
    if(!name){
        return alert('이름을 입력하시오');
    }
    if(!ip){
        return alert('ip 주소를 입력하시오');
    }


    if(!cnfName.test(name)){

        return alert('이름은 알파벳 대/소문자 숫자를 이용해 지어주시기 바랍니다.');
    }

    if(!cnfIp.test(ip)){
        return alert('정확한 ip값을 입력하세요');
    }

    if(!skin){
        return alert('연결된 모듈의 skin종류를 입력하시오.');
    }


    var xhr = new XMLHttpRequest();
    xhr.onload = ()=>{
        console.log('sssss');
        if(xhr.status === 201 ){
            console.log(xhr.responseText);
            getMasterBots();
        }else{
            console.error(xhr.responseText);
        }
    };

    console.log(name);
    console.log(ip);

    xhr.open('POST', '/admin/register');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify({name: name, ip: ip, skin:skin}));
    e.target.name.value = '';
    e.target.ip.value='';
});

//master 삭제
addDeleteEvent=()=>{
    var deleteBtn = document.getElementById("tblardu").querySelectorAll(".delete");
    for(var x=0; x<deleteBtn.length; x++)
    {
        deleteBtn[x].addEventListener('click',(e) => { 
            e.preventDefault();
            let id = e.target.id;
            console.log(id);
            id = id.replace('_delete', '');
            console.log(id);
            var xhr = new XMLHttpRequest();

            xhr.onload = ()=>{
                if(xhr.status === 201||xhr.status === 200){
                    getMasterBots();
                    deleteBtn = document.getElementById("tblardu").querySelectorAll(".delete");
                }else{
                    console.error(xhr.responseText);
                }
            };

            xhr.open('DELETE', '/admin/delete');
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.send(JSON.stringify({id: id}));
        });
    }
}

//master skin 변경
skinSelectEvent=()=>{
    var confirmBtn = document.getElementById("tblardu").querySelectorAll(".confirm");
    for(var x=0; x<confirmBtn.length; x++)
    {
        confirmBtn[x].addEventListener('click',(e) => { 
            e.preventDefault();
            let id = e.target.id;
            console.log(id);
            id = id.replace('_confirm', '');
            console.log(id);
            var xhr = new XMLHttpRequest();

            var sel = document.getElementById(`${id}_master_skin`).value

            xhr.onload = ()=>{
                if(xhr.status === 201||xhr.status === 200){
                    getMasterBots();
                    confirmBtn = document.getElementById("tblardu").querySelectorAll(".confirm");
                }else{
                    console.error(xhr.responseText);
                }
            };

            xhr.open('PATCH', '/admin/'+master.id);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.send(JSON.stringify({skin:sel, id:id}));
        });
    }
}

//옵션 추가용 함수
addOption = (sel, value) =>{
    let opt = new Option();
    opt.value = value;
    opt.text = value;
    sel.options.add(opt);
}

/*
getSkin = () =>{
    var xhr = new XMLHttpRequest();
    if(xhr.status === 200||xhr.status === 201){
        let result = JSON.parse(xhr.responseText);
        console.log('asdfasf!!!!');
        console.log(result)
        return result;
        
    }
    xhr.open('GET', '/instruction/getskin');
    xhr.send();
    
}
*/

skinSelectEvent();
addDeleteEvent(); 