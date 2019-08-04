Medialab Robotics Platform Project 
===========================================
#ENG
---------------
#description

```
this project is an arduino platform which can controll arduino vie web.
this projcet use node.js express framework, socket.io, standard firmata, johnny-five.
```

#about modules

```
this project specifies arduino module as two classes called master and slave and attach skin to the to run the specific task
 
*master
master module is the primary module connected to esp8266(esp-01) and can command to other slave module
each master can connect 8 additional module

*slave
slave module is the module which are connected to master and receive commands and run the skin module attatched to it
slave module also has a port but this can only be used to receive command not to command

```

#1. How to use

##1. connect Esp8266 to servercomputer
```
1. follow this link and proceed this step to connect master module via esp8266 to wifi
https://medium.com/@anaganisk/connecting-johnny-five-arduino-raspberry-pi-etc-over-wifi-to-the-pc-using-esp8266-a10348fdb300

2. type the command 'npm install' to install all the module used in the project

3. access to server and go to module admin page through the menu bar

4. type the ip address of the esp8266 to master register form

5. go back to main page, there probably would be a circle correspond to your master module you just created.
click the circle to controll arduino
if the module is connected properly then it will move well.
if the module is not connected it will send you an error through console


ps. it is very tricy to connect and run the arduino
ps2. I used a esp8266 (esp-01)m module with arduino mega (use mega2560 as possible. it has highest sucsess rate among my other arduino mega.)
ps3. use additional power supplyer as posible as descrpited in the avobe page.
```


##2. how to use master and slave module with skin
```
1. skin should be connected to GPIO pin number 12 of master and slave module.
2. for master module, number 2~9 GPIOpins would be the port to command, corresponding to port 1~8
3. for slave module, 2~9GPIO pin would receive commands
```


#3. Things to do next
```
1. if the type of the skin module is defined, additional task for the skin module will be proceeded
2. if there is better idea about ui then the additinal task for ui will be proceeded
3. 
```


######if you have a question plz leave a comment or messege to me


-------------------------------------------------------------------


#KOR
-----------------
#����
```
�� ������Ʈ�� �Ƶ��̳븦 ���������� ��Ʈ�� �ϴ� �÷����� ���� ������Ʈ�Դϴ�.
�� ������Ʈ������ node.js�� express framework, socket.io, standard firmata, johnny-five���� ����� ���Ǿ����ϴ�. 

```

#���� ��⿡ ���ؼ�
```
�� ������Ʈ������ �Ƶ��̳� ����� master �� slave, �׸��� �̵鿡 �����ϴ� skin module�� ������ �����մϴ�.

* master 
master ����� exp8266�� ����� ��ü�μ� ��Ʈ�� ���Ͽ� �����(Ư�� GPIO) ����� �����ϴ�.
�� master�� ���� ������ ����� �ִ� 8���Դϴ�.

* slave
slave ����� master�� ����� ���μ� master�� ���ؼ� ����� ������ �ö� skin module�� �ش��ϴ� �۾��� �����ϰ� �˴ϴ�.
slave ��⿡�� ��Ʈ�� ������ �̴� �ٸ� module�� ���� ����� �ޱ� ��������, ���� ����� ���� ���� �����ϴ�.
```

#����

##1. ��ǻ�Ϳ� �Ƶ��̳� ����
```
1. �Ʒ� ��ũ�� ���� ������ �����ֽñ� �ٶ��ϴ�.
https://medium.com/@anaganisk/connecting-johnny-five-arduino-raspberry-pi-etc-over-wifi-to-the-pc-using-esp8266-a10348fdb300

2. 'npm install' Ŀ��带 �̿��Ͽ� ���� ��Ű������ ��ġ�� �ݴϴ�.

3. admin-module �������� �޴��ٸ� ���ؼ� ������ �ݴϴ�.

4. �ռ� Ȯ���ߴ� esp8266�� ip ��ũ�� ����Ʈ ��϶��� �Է��� �ݴϴ�.

5. main �������� ���ư���, �ش� ��⿡ �ش��ϴ� ���׶�̰� �׷��� �����ٵ�, ���������� ������ �Ǿ��ٸ� �ش� ���׶�̸� ������ ��, ������ �ϰ� �˴ϴ�.
(������ ���� �ʾ��� ��� �ܼ�â�� ������ �߰� �˴ϴ�. // �ռ� ������ ������ �־��ų�, �Ƶ��̳���� ������ �Ҿ����� ��Ȳ�Դϴ�.)

ps. �����ϱⰡ �ϳ� ���� �� �ֽ��ϴ�.
ps2. �Ƶ��̳� �ް��� exp8266-01�� ����Ͽ����ϴ�. �Ƶ��̳� �ް� �� �߿����� MEGA 2560�� ����ϴ� ���� ���� �������� ���ҽ��ϴ�.
ps3. ���� ���� ������ �������� ���Ͽ� esp8266�� ������ ������ �ϴ� ������ �߻��ϴµ�, Ʃ�丮�� ��ũ�� ���°� ó�� �߰����� ���� ������ġ�� ����ϴ� �͵� �� ����Դϴ�.

```

##2. master ���� slave ���, skin�� ����
```
1. skin �� master�� slave�� GPIO 12�� �ɿ� ������ �ֽñ� �ٶ��ϴ�.
2. master module�� ���, 2~9�� GPIO���� ���� ����� ���� �����ε�, �ش� ���� 1~8 �� ��Ʈ�� �ش��մϴ�.
3. slave ����� ���, 2~9�� �ɰ� ����� ��Ʈ�� ���� ����� �޽��ϴ�.
```


#3. �����ؾ� �� ���
```
1. skin ����� ������ ������ �Ǹ�, �ش� skin ��⿡ ���� �۾��� �� ���� (�⺻�����δ� 4�� ����)
2. ui �������� �ִٸ� �߰����� ui ����
3. 
```



######����Ͻô� �ñ��Ͻ� ���� �ִٸ�, �ڸ�Ʈ�� ���� �ֽðų� �޼����� ���� �ֽø� �亯�� �帮���� �ϰڽ��ϴ�.