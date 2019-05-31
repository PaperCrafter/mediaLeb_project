    
function getMasterBots(){
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
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
                td.textContent = master.ip;
                tr.appendChild(td);
                
                var td = document.createElement('td');
                var btn = document.createElement('button');
                btn.className = "btn btn-secondary";
                btn.id=`${DB.id}_confirm`;
                btn.textContent = "확인";
                td.appendChild(btn);
                tr.appendChild(td);

                var td = document.createElement('td');
                var btn = document.createElement('button');
                btn.className = "btn btn-secondary";
                btn.id=`${DB.id}_delete`;
                btn.textContent = "제거";
                td.appendChild(btn);
                tr.appendChild(td);
                
                tbody.appendChild(tr);
            });
        }else{
            console.log('error!!');
        }
    };
    xhr.open('GET', '/admin/getList');
    xhr.send();
}


document.getElementById('masterRegister').addEventListener('submit', function(e){
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
    xhr.onload = function(){
        if(xhr.status === 201){
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
    getMasterBots();
});


var deleteBtn = document.getElementById("tblardu").querySelectorAll("button");
for(var x=0; x<deleteBtn.length; x++)
{
    deleteBtn[x].onclick = function (e) { 
        e.preventDefault();
        alert(e.target.id);
        let id = e.target.id;
        id.replace('_delete','');
        //id = id - "_delete";
        var xhr = new XMLHttpRequest();

        xhr.onload = function(){
            if(xhr.status === 201||xhr.status === 200){
                console.log(xhr.responseText);
                getMasterBots();
            }else{
                console.error(xhr.responseText);
            }
        };

        xhr.open('DELETE', '/admin/delete');
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(JSON.stringify({id: id}));
    };
}