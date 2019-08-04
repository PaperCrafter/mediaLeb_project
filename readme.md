Medialab Robotics Platform Project 
===========================================
#ENG
---------------
#description


>this project is an arduino platform which can controll arduino vie web.
>this projcet use node.js express framework, socket.io, standard firmata, johnny-five.


#about modules


>this project specifies arduino module as two classes called master and slave and attach skin to the to run the specific task
 
>*master
>master module is the primary module connected to esp8266(esp-01) and can command to other slave module
>each master can connect 8 additional module

>*slave
>slave module is the module which are connected to master and receive commands and run the skin module attatched to it
>slave module also has a port but this can only be used to receive command not to command

```

#1. How to use

##1. connect Esp8266 to servercomputer

>1. follow this link and proceed this step to connect master module via esp8266 to wifi
>https://medium.com/@anaganisk/connecting-johnny-five-arduino-raspberry-pi-etc-over-wifi-to-the-pc-using-esp8266-a10348fdb300

>2. type the command 'npm install' to install all the module used in the project

>3. access to server and go to module admin page through the menu bar

>4. type the ip address of the esp8266 to master register form

>5. go back to main page, there probably would be a circle correspond to your master module you just created.
>click the circle to controll arduino
>if the module is connected properly then it will move well.
>if the module is not connected it will send you an error through console


>ps. it is very tricy to connect and run the arduino
>ps2. I used a esp8266 (esp-01)m module with arduino mega (use mega2560 as possible. it has highest sucsess rate among my other arduino mega.)
>ps3. use additional power supplyer as posible as descrpited in the avobe page.



##2. how to use master and slave module with skin

>1. skin should be connected to GPIO pin number 12 of master and slave module.
>2. for master module, number 2~9 GPIOpins would be the port to command, corresponding to port 1~8
>3. for slave module, 2~9GPIO pin would receive commands
```


#3. Things to do next

>1. if the type of the skin module is defined, additional task for the skin module will be proceeded
>2. if there is better idea about ui then the additinal task for ui will be proceeded
>3. 



######if you have a question plz leave a comment or messege to me


-------------------------------------------------------------------


#KOR
-----------------
#설명

>이 프로젝트는 아두이노를 웹브라우저로 컨트롤 하는 플렛폼을 만든 프로젝트입니다.
>이 프로젝트에서는 node.js의 express framework, socket.io, standard firmata, johnny-five등의 기술이 사용되었습니다. 


#사용될 모듈에 관해서

>본 프로젝트에서는 아두이노 모듈을 master 와 slave, 그리고 이들에 부착하는 skin module로 나누어 규정합니다.

>* master 
>master 모듈은 exp8266이 연결된 본체로서 포트를 통하여 연결된(특정 GPIO) 명령을 내립니다.
>한 master에 연결 가능한 모듈은 최대 8개입니다.

>* slave
>slave 모듈은 master에 연결된 모듈로서 master를 통해서 명령을 받으며 올라간 skin module에 해당하는 작업을 수행하게 됩니다.
>slave 모듈에도 포트가 있으나 이는 다른 module로 부터 명령을 받기 위함이지, 직접 명령을 내릴 수는 없습니다.
```

#사용법

##1. 컴퓨터와 아두이노 연결

>1. 아래 링크에 들어가서 절차를 따라주시기 바랍니다.
>https://medium.com/@anaganisk/connecting-johnny-five-arduino-raspberry-pi-etc-over-wifi-to-the-pc-using-esp8266-a10348fdb300

>2. 'npm install' 커멘드를 이용하여 사용된 패키지들을 설치해 줍니다.

>3. admin-module 페이지에 메뉴바를 통해서 접근해 줍니다.

>4. 앞서 확인했던 esp8266의 ip 링크를 마스트 등록란에 입력해 줍니다.

>5. main 페이지로 돌아가면, 해당 모듈에 해당하는 동그라미가 그려져 있을텐데, 정상적으로 연결이 되었다면 해당 동그라미를 눌렀을 시, 반응을 하게 됩니다.
>(연결이 되지 않았을 경우 콘솔창에 에러가 뜨게 됩니다. // 앞선 절차에 문제가 있었거나, 아두이노와의 연결이 불안정한 상황입니다.)

>ps. 연결하기가 꽤나 힘들 수 있습니다.
>ps2. 아두이노 메가와 exp8266-01을 사용하였습니다. 아두이노 메가 모델 중에서는 MEGA 2560을 사용하는 것이 가장 성공률이 높았습니다.
>ps3. 가끔 전력 공급이 원할하지 못하여 esp8266이 꺼졌다 켜졌다 하는 현상이 발생하는데, 튜토리얼 링크에 나온것 처럼 추가적인 전원 공급장치를 사용하는 것>도 한 방법입니다.



##2. master 모듈과 slave 모듈, skin의 사용법

>1. skin 은 master나 slave의 GPIO 12번 핀에 연결해 주시기 바랍니다.
>2. master module의 경우, 2~9번 GPIO핀을 통해 명령을 내릴 예정인데, 해당 핀은 1~8 번 포트에 해당합니다.
>3. slave 모듈의 경우, 2~9번 핀과 연결된 포트를 통해 명령을 받습니다.


#3. 구현해야 할 목록

>1. skin 모듈의 종류가 결정이 되면, 해당 skin 모듈에 대한 작업에 들어갈 것임 (기본적으로는 4개 예상)
>2. ui 개선안이 있다면 추가적인 ui 개선
>3. 




######사용하시다 궁금하신 점이 있다면, 코멘트를 남겨 주시거나 메세지를 보내 주시면 답변해 드리도록 하겠습니다.
