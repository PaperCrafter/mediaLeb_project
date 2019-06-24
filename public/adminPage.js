
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
                let btn = document.createElement('button');
                btn.className = "btn btn-secondary confirm";

                btn.type="submit";
                btn.id=`${slave.id}_confirm`;
                btn.textContent = "확인";
                td.appendChild(btn);
                row.appendChild(td);

                let remove = document.createElement('button');
                remove.className = "btn btn-secondary delete";
                remove.type="submit";
                remove.id=`${slave.id}_delete`;
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
    if(!id){
        return alert('master id를 입력하시오');
    }
    if(!port){
        return alert('포트번호를 입력하시오');
    }
    if(!skin){
        return alert('연결된 모듈의 skin종류를 입력하시오.');
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
                var sel = document.createElement('select');
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
    var name = e.target.name.value;
    var ip = e.target.ip.value;

    if(!name){
        return alert('이름을 입력하시오');
    }
    if(!ip){
        return alert('ip 주소를 입력하시오');
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
    xhr.send(JSON.stringify({name: name, ip: ip}));
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

addDeleteEvent(); 