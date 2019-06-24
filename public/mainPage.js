getModules=()=>{
    var xhr = new XMLHttpRequest();
    xhr.onload = ()=>{
        if(xhr.status == 200){
            var master = JSON.parse(xhr.responseText);
            console.log(master);
            
            pageBody = document.querySelector('.modules');
            

            var tbody = document.querySelector('.modules');
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
    xhr.open('GET', '/getModules');
    xhr.send();
}