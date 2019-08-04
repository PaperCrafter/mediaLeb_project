Medialab Robotics Platform Project 
===========================================
# ENG
---------------
# description


>this project is an arduino platform which can controll arduino vie web.
>this projcet use node.js express framework, socket.io, standard firmata, johnny-five.


# about modules


>this project specifies arduino module as two classes called master and slave and attach skin to the to run the specific task
 
>*master
>master module is the primary module connected to esp8266(esp-01) and can command to other slave module
>each master can connect 8 additional module

>*slave
>slave module is the module which are connected to master and receive commands and run the skin module attatched to it
>slave module also has a port but this can only be used to receive command not to command



# 1. How to use

## 1. connect Esp8266 to servercomputer

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



## 2. how to use master and slave module with skin

>1. skin should be connected to GPIO pin number 12 of master and slave module.
>2. for master module, number 2~9 GPIOpins would be the port to command, corresponding to port 1~8
>3. for slave module, 2~9GPIO pin would receive commands



## 3. Things to do next

>1. if the type of the skin module is defined, additional task for the skin module will be proceeded
>2. if there is better idea about ui then the additinal task for ui will be proceeded
>3. 



###### if you have a question plz leave a comment or messege to me


-------------------------------------------------------------------


# KOR
-----------------
<<<<<<< HEAD
# 설명

>이 프로젝트는 아두이노를 웹브라우저로 컨트롤 하는 플렛폼을 만든 프로젝트입니다.
>이 프로젝트에서는 node.js의 express framework, socket.io, standard firmata, johnny-five등의 기술이 사용되었습니다. 


# 사용될 모듈에 관해서

>본 프로젝트에서는 아두이노 모듈을 master 와 slave, 그리고 이들에 부착하는 skin module로 나누어 규정합니다.

>* master 
>master 모듈은 exp8266이 연결된 본체로서 포트를 통하여 연결된(특정 GPIO) 명령을 내립니다.
>한 master에 연결 가능한 모듈은 최대 8개입니다.

>* slave
>slave 모듈은 master에 연결된 모듈로서 master를 통해서 명령을 받으며 올라간 skin module에 해당하는 작업을 수행하게 됩니다.
>slave 모듈에도 포트가 있으나 이는 다른 module로 부터 명령을 받기 위함이지, 직접 명령을 내릴 수는 없습니다.


# 사용법

## 1. 컴퓨터와 아두이노 연결

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



## 2. master 모듈과 slave 모듈, skin의 사용법

>1. skin 은 master나 slave의 GPIO 12번 핀에 연결해 주시기 바랍니다.
>2. master module의 경우, 2~9번 GPIO핀을 통해 명령을 내릴 예정인데, 해당 핀은 1~8 번 포트에 해당합니다.
>3. slave 모듈의 경우, 2~9번 핀과 연결된 포트를 통해 명령을 받습니다.


## 3. 구현해야 할 목록

>1. skin 모듈의 종류가 결정이 되면, 해당 skin 모듈에 대한 작업에 들어갈 것임 (기본적으로는 4개 예상)
>2. ui 개선안이 있다면 추가적인 ui 개선
=======
# �꽕紐�

>�씠 �봽濡쒖젥�듃�뒗 �븘�몢�씠�끂瑜� �쎒釉뚮씪�슦���濡� 而⑦듃濡� �븯�뒗 �뵆�젢�뤌�쓣 留뚮뱺 �봽濡쒖젥�듃�엯�땲�떎.
>�씠 �봽濡쒖젥�듃�뿉�꽌�뒗 node.js�쓽 express framework, socket.io, standard firmata, johnny-five�벑�쓽 湲곗닠�씠 �궗�슜�릺�뿀�뒿�땲�떎. 


# �궗�슜�맆 紐⑤뱢�뿉 愿��빐�꽌

>蹂� �봽濡쒖젥�듃�뿉�꽌�뒗 �븘�몢�씠�끂 紐⑤뱢�쓣 master ��� slave, 洹몃━怨� �씠�뱾�뿉 遺�李⑺븯�뒗 skin module濡� �굹�늻�뼱 洹쒖젙�빀�땲�떎.

>* master 
>master 紐⑤뱢��� exp8266�씠 �뿰寃곕맂 蹂몄껜濡쒖꽌 �룷�듃瑜� �넻�븯�뿬 �뿰寃곕맂(�듅�젙 GPIO) 紐낅졊�쓣 �궡由쎈땲�떎.
>�븳 master�뿉 �뿰寃� 媛��뒫�븳 紐⑤뱢��� 理쒕�� 8媛쒖엯�땲�떎.

>* slave
>slave 紐⑤뱢��� master�뿉 �뿰寃곕맂 紐⑤뱢濡쒖꽌 master瑜� �넻�빐�꽌 紐낅졊�쓣 諛쏆쑝硫� �삱�씪媛� skin module�뿉 �빐�떦�븯�뒗 �옉�뾽�쓣 �닔�뻾�븯寃� �맗�땲�떎.
>slave 紐⑤뱢�뿉�룄 �룷�듃媛� �엳�쑝�굹 �씠�뒗 �떎瑜� module濡� 遺��꽣 紐낅졊�쓣 諛쏄린 �쐞�븿�씠吏�, 吏곸젒 紐낅졊�쓣 �궡由� �닔�뒗 �뾾�뒿�땲�떎.


# �궗�슜踰�

## 1. 而댄벂�꽣��� �븘�몢�씠�끂 �뿰寃�

>1. �븘�옒 留곹겕�뿉 �뱾�뼱媛��꽌 �젅李⑤�� �뵲�씪二쇱떆湲� 諛붾엻�땲�떎.
>https://medium.com/@anaganisk/connecting-johnny-five-arduino-raspberry-pi-etc-over-wifi-to-the-pc-using-esp8266-a10348fdb300

>2. 'npm install' 而ㅻ찘�뱶瑜� �씠�슜�븯�뿬 �궗�슜�맂 �뙣�궎吏��뱾�쓣 �꽕移섑빐 以띾땲�떎.

>3. admin-module �럹�씠吏��뿉 硫붾돱諛붾�� �넻�빐�꽌 �젒洹쇳빐 以띾땲�떎.

>4. �븵�꽌 �솗�씤�뻽�뜕 esp8266�쓽 ip 留곹겕瑜� 留덉뒪�듃 �벑濡앸���뿉 �엯�젰�빐 以띾땲�떎.

>5. main �럹�씠吏�濡� �룎�븘媛�硫�, �빐�떦 紐⑤뱢�뿉 �빐�떦�븯�뒗 �룞洹몃씪誘멸�� 洹몃젮�졇 �엳�쓣�뀗�뜲, �젙�긽�쟻�쑝濡� �뿰寃곗씠 �릺�뿀�떎硫� �빐�떦 �룞洹몃씪誘몃�� �닃����쓣 �떆, 諛섏쓳�쓣 �븯寃� �맗�땲�떎.
>(�뿰寃곗씠 �릺吏� �븡�븯�쓣 寃쎌슦 肄섏넄李쎌뿉 �뿉�윭媛� �쑉寃� �맗�땲�떎. // �븵�꽑 �젅李⑥뿉 臾몄젣媛� �엳�뿀嫄곕굹, �븘�몢�씠�끂����쓽 �뿰寃곗씠 遺덉븞�젙�븳 �긽�솴�엯�땲�떎.)

>ps. �뿰寃고븯湲곌�� 苑ㅻ굹 �옒�뱾 �닔 �엳�뒿�땲�떎.

>ps2. �븘�몢�씠�끂 硫붽����� exp8266-01�쓣 �궗�슜�븯����뒿�땲�떎. �븘�몢�씠�끂 硫붽�� 紐⑤뜽 以묒뿉�꽌�뒗 MEGA 2560�쓣 �궗�슜�븯�뒗 寃껋씠 媛��옣 �꽦怨듬쪧�씠 �넂�븯�뒿�땲�떎.

>ps3. 媛��걫 �쟾�젰 怨듦툒�씠 �썝�븷�븯吏� 紐삵븯�뿬 esp8266�씠 爰쇱죱�떎 耳쒖죱�떎 �븯�뒗 �쁽�긽�씠 諛쒖깮�븯�뒗�뜲, �뒠�넗由ъ뼹 留곹겕�뿉 �굹�삩寃� 泥섎읆 異붽���쟻�씤 �쟾�썝 怨듦툒�옣移섎�� �궗�슜�븯�뒗 寃�>�룄 �븳 諛⑸쾿�엯�땲�떎.



## 2. master 紐⑤뱢怨� slave 紐⑤뱢, skin�쓽 �궗�슜踰�

>1. skin ��� master�굹 slave�쓽 GPIO 12踰� ����뿉 �뿰寃고빐 二쇱떆湲� 諛붾엻�땲�떎.
>2. master module�쓽 寃쎌슦, 2~9踰� GPIO����쓣 �넻�빐 紐낅졊�쓣 �궡由� �삁�젙�씤�뜲, �빐�떦 ������ 1~8 踰� �룷�듃�뿉 �빐�떦�빀�땲�떎.
>3. slave 紐⑤뱢�쓽 寃쎌슦, 2~9踰� ���怨� �뿰寃곕맂 �룷�듃瑜� �넻�빐 紐낅졊�쓣 諛쏆뒿�땲�떎.


## 3. 援ы쁽�빐�빞 �븷 紐⑸줉

>1. skin 紐⑤뱢�쓽 醫낅쪟媛� 寃곗젙�씠 �릺硫�, �빐�떦 skin 紐⑤뱢�뿉 ����븳 �옉�뾽�뿉 �뱾�뼱媛� 寃껋엫 (湲곕낯�쟻�쑝濡쒕뒗 4媛� �삁�긽)
>2. ui 媛쒖꽑�븞�씠 �엳�떎硫� 異붽���쟻�씤 ui 媛쒖꽑
>>>>>>> cf1d59fc01b8bf20a84b6171d56db022ce2e7229
>3. 




<<<<<<< HEAD
###### 사용하시다 궁금하신 점이 있다면, 코멘트를 남겨 주시거나 메세지를 보내 주시면 답변해 드리도록 하겠습니다.
=======
###### �궗�슜�븯�떆�떎 沅곴툑�븯�떊 �젏�씠 �엳�떎硫�, 肄붾찘�듃瑜� �궓寃� 二쇱떆嫄곕굹 硫붿꽭吏�瑜� 蹂대궡 二쇱떆硫� �떟蹂��빐 �뱶由щ룄濡� �븯寃좎뒿�땲�떎.
>>>>>>> cf1d59fc01b8bf20a84b6171d56db022ce2e7229
