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
# ¼³¸í

>ÀÌ ÇÁ·ÎÁ§Æ®´Â ¾ÆµÎÀÌ³ë¸¦ À¥ºê¶ó¿ìÀú·Î ÄÁÆ®·Ñ ÇÏ´Â ÇÃ·¿ÆûÀ» ¸¸µç ÇÁ·ÎÁ§Æ®ÀÔ´Ï´Ù.
>ÀÌ ÇÁ·ÎÁ§Æ®¿¡¼­´Â node.jsÀÇ express framework, socket.io, standard firmata, johnny-fiveµîÀÇ ±â¼úÀÌ »ç¿ëµÇ¾ú½À´Ï´Ù. 


# »ç¿ëµÉ ¸ðµâ¿¡ °üÇØ¼­

>º» ÇÁ·ÎÁ§Æ®¿¡¼­´Â ¾ÆµÎÀÌ³ë ¸ðµâÀ» master ¿Í slave, ±×¸®°í ÀÌµé¿¡ ºÎÂøÇÏ´Â skin module·Î ³ª´©¾î ±ÔÁ¤ÇÕ´Ï´Ù.

>* master 
>master ¸ðµâÀº exp8266ÀÌ ¿¬°áµÈ º»Ã¼·Î¼­ Æ÷Æ®¸¦ ÅëÇÏ¿© ¿¬°áµÈ(Æ¯Á¤ GPIO) ¸í·ÉÀ» ³»¸³´Ï´Ù.
>ÇÑ master¿¡ ¿¬°á °¡´ÉÇÑ ¸ðµâÀº ÃÖ´ë 8°³ÀÔ´Ï´Ù.

>* slave
>slave ¸ðµâÀº master¿¡ ¿¬°áµÈ ¸ðµâ·Î¼­ master¸¦ ÅëÇØ¼­ ¸í·ÉÀ» ¹ÞÀ¸¸ç ¿Ã¶ó°£ skin module¿¡ ÇØ´çÇÏ´Â ÀÛ¾÷À» ¼öÇàÇÏ°Ô µË´Ï´Ù.
>slave ¸ðµâ¿¡µµ Æ÷Æ®°¡ ÀÖÀ¸³ª ÀÌ´Â ´Ù¸¥ module·Î ºÎÅÍ ¸í·ÉÀ» ¹Þ±â À§ÇÔÀÌÁö, Á÷Á¢ ¸í·ÉÀ» ³»¸± ¼ö´Â ¾ø½À´Ï´Ù.


# »ç¿ë¹ý

## 1. ÄÄÇ»ÅÍ¿Í ¾ÆµÎÀÌ³ë ¿¬°á

>1. ¾Æ·¡ ¸µÅ©¿¡ µé¾î°¡¼­ ÀýÂ÷¸¦ µû¶óÁÖ½Ã±â ¹Ù¶ø´Ï´Ù.
>https://medium.com/@anaganisk/connecting-johnny-five-arduino-raspberry-pi-etc-over-wifi-to-the-pc-using-esp8266-a10348fdb300

>2. 'npm install' Ä¿¸àµå¸¦ ÀÌ¿ëÇÏ¿© »ç¿ëµÈ ÆÐÅ°ÁöµéÀ» ¼³Ä¡ÇØ ÁÝ´Ï´Ù.

>3. admin-module ÆäÀÌÁö¿¡ ¸Þ´º¹Ù¸¦ ÅëÇØ¼­ Á¢±ÙÇØ ÁÝ´Ï´Ù.

>4. ¾Õ¼­ È®ÀÎÇß´ø esp8266ÀÇ ip ¸µÅ©¸¦ ¸¶½ºÆ® µî·Ï¶õ¿¡ ÀÔ·ÂÇØ ÁÝ´Ï´Ù.

>5. main ÆäÀÌÁö·Î µ¹¾Æ°¡¸é, ÇØ´ç ¸ðµâ¿¡ ÇØ´çÇÏ´Â µ¿±×¶ó¹Ì°¡ ±×·ÁÁ® ÀÖÀ»ÅÙµ¥, Á¤»óÀûÀ¸·Î ¿¬°áÀÌ µÇ¾ú´Ù¸é ÇØ´ç µ¿±×¶ó¹Ì¸¦ ´­·¶À» ½Ã, ¹ÝÀÀÀ» ÇÏ°Ô µË´Ï´Ù.
>(¿¬°áÀÌ µÇÁö ¾Ê¾ÒÀ» °æ¿ì ÄÜ¼ÖÃ¢¿¡ ¿¡·¯°¡ ¶ß°Ô µË´Ï´Ù. // ¾Õ¼± ÀýÂ÷¿¡ ¹®Á¦°¡ ÀÖ¾ú°Å³ª, ¾ÆµÎÀÌ³ë¿ÍÀÇ ¿¬°áÀÌ ºÒ¾ÈÁ¤ÇÑ »óÈ²ÀÔ´Ï´Ù.)

>ps. ¿¬°áÇÏ±â°¡ ²Ï³ª Èûµé ¼ö ÀÖ½À´Ï´Ù.

>ps2. ¾ÆµÎÀÌ³ë ¸Þ°¡¿Í exp8266-01À» »ç¿ëÇÏ¿´½À´Ï´Ù. ¾ÆµÎÀÌ³ë ¸Þ°¡ ¸ðµ¨ Áß¿¡¼­´Â MEGA 2560À» »ç¿ëÇÏ´Â °ÍÀÌ °¡Àå ¼º°ø·üÀÌ ³ô¾Ò½À´Ï´Ù.

>ps3. °¡²û Àü·Â °ø±ÞÀÌ ¿øÇÒÇÏÁö ¸øÇÏ¿© esp8266ÀÌ ²¨Á³´Ù ÄÑÁ³´Ù ÇÏ´Â Çö»óÀÌ ¹ß»ýÇÏ´Âµ¥, Æ©Åä¸®¾ó ¸µÅ©¿¡ ³ª¿Â°Í Ã³·³ Ãß°¡ÀûÀÎ Àü¿ø °ø±ÞÀåÄ¡¸¦ »ç¿ëÇÏ´Â °Í>µµ ÇÑ ¹æ¹ýÀÔ´Ï´Ù.



## 2. master ¸ðµâ°ú slave ¸ðµâ, skinÀÇ »ç¿ë¹ý

>1. skin Àº master³ª slaveÀÇ GPIO 12¹ø ÇÉ¿¡ ¿¬°áÇØ ÁÖ½Ã±â ¹Ù¶ø´Ï´Ù.
>2. master moduleÀÇ °æ¿ì, 2~9¹ø GPIOÇÉÀ» ÅëÇØ ¸í·ÉÀ» ³»¸± ¿¹Á¤ÀÎµ¥, ÇØ´ç ÇÉÀº 1~8 ¹ø Æ÷Æ®¿¡ ÇØ´çÇÕ´Ï´Ù.
>3. slave ¸ðµâÀÇ °æ¿ì, 2~9¹ø ÇÉ°ú ¿¬°áµÈ Æ÷Æ®¸¦ ÅëÇØ ¸í·ÉÀ» ¹Þ½À´Ï´Ù.


## 3. ±¸ÇöÇØ¾ß ÇÒ ¸ñ·Ï

>1. skin ¸ðµâÀÇ Á¾·ù°¡ °áÁ¤ÀÌ µÇ¸é, ÇØ´ç skin ¸ðµâ¿¡ ´ëÇÑ ÀÛ¾÷¿¡ µé¾î°¥ °ÍÀÓ (±âº»ÀûÀ¸·Î´Â 4°³ ¿¹»ó)
>2. ui °³¼±¾ÈÀÌ ÀÖ´Ù¸é Ãß°¡ÀûÀÎ ui °³¼±
=======
# ì„¤ëª…

>ì´ í”„ë¡œì íŠ¸ëŠ” ì•„ë‘ì´ë…¸ë¥¼ ì›¹ë¸Œë¼ìš°ì €ë¡œ ì»¨íŠ¸ë¡¤ í•˜ëŠ” í”Œë ›í¼ì„ ë§Œë“  í”„ë¡œì íŠ¸ìž…ë‹ˆë‹¤.
>ì´ í”„ë¡œì íŠ¸ì—ì„œëŠ” node.jsì˜ express framework, socket.io, standard firmata, johnny-fiveë“±ì˜ ê¸°ìˆ ì´ ì‚¬ìš©ë˜ì—ˆìŠµë‹ˆë‹¤. 


# ì‚¬ìš©ë  ëª¨ë“ˆì— ê´€í•´ì„œ

>ë³¸ í”„ë¡œì íŠ¸ì—ì„œëŠ” ì•„ë‘ì´ë…¸ ëª¨ë“ˆì„ master ì™€ slave, ê·¸ë¦¬ê³  ì´ë“¤ì— ë¶€ì°©í•˜ëŠ” skin moduleë¡œ ë‚˜ëˆ„ì–´ ê·œì •í•©ë‹ˆë‹¤.

>* master 
>master ëª¨ë“ˆì€ exp8266ì´ ì—°ê²°ëœ ë³¸ì²´ë¡œì„œ í¬íŠ¸ë¥¼ í†µí•˜ì—¬ ì—°ê²°ëœ(íŠ¹ì • GPIO) ëª…ë ¹ì„ ë‚´ë¦½ë‹ˆë‹¤.
>í•œ masterì— ì—°ê²° ê°€ëŠ¥í•œ ëª¨ë“ˆì€ ìµœëŒ€ 8ê°œìž…ë‹ˆë‹¤.

>* slave
>slave ëª¨ë“ˆì€ masterì— ì—°ê²°ëœ ëª¨ë“ˆë¡œì„œ masterë¥¼ í†µí•´ì„œ ëª…ë ¹ì„ ë°›ìœ¼ë©° ì˜¬ë¼ê°„ skin moduleì— í•´ë‹¹í•˜ëŠ” ìž‘ì—…ì„ ìˆ˜í–‰í•˜ê²Œ ë©ë‹ˆë‹¤.
>slave ëª¨ë“ˆì—ë„ í¬íŠ¸ê°€ ìžˆìœ¼ë‚˜ ì´ëŠ” ë‹¤ë¥¸ moduleë¡œ ë¶€í„° ëª…ë ¹ì„ ë°›ê¸° ìœ„í•¨ì´ì§€, ì§ì ‘ ëª…ë ¹ì„ ë‚´ë¦´ ìˆ˜ëŠ” ì—†ìŠµë‹ˆë‹¤.


# ì‚¬ìš©ë²•

## 1. ì»´í“¨í„°ì™€ ì•„ë‘ì´ë…¸ ì—°ê²°

>1. ì•„ëž˜ ë§í¬ì— ë“¤ì–´ê°€ì„œ ì ˆì°¨ë¥¼ ë”°ë¼ì£¼ì‹œê¸° ë°”ëžë‹ˆë‹¤.
>https://medium.com/@anaganisk/connecting-johnny-five-arduino-raspberry-pi-etc-over-wifi-to-the-pc-using-esp8266-a10348fdb300

>2. 'npm install' ì»¤ë©˜ë“œë¥¼ ì´ìš©í•˜ì—¬ ì‚¬ìš©ëœ íŒ¨í‚¤ì§€ë“¤ì„ ì„¤ì¹˜í•´ ì¤ë‹ˆë‹¤.

>3. admin-module íŽ˜ì´ì§€ì— ë©”ë‰´ë°”ë¥¼ í†µí•´ì„œ ì ‘ê·¼í•´ ì¤ë‹ˆë‹¤.

>4. ì•žì„œ í™•ì¸í–ˆë˜ esp8266ì˜ ip ë§í¬ë¥¼ ë§ˆìŠ¤íŠ¸ ë“±ë¡ëž€ì— ìž…ë ¥í•´ ì¤ë‹ˆë‹¤.

>5. main íŽ˜ì´ì§€ë¡œ ëŒì•„ê°€ë©´, í•´ë‹¹ ëª¨ë“ˆì— í•´ë‹¹í•˜ëŠ” ë™ê·¸ë¼ë¯¸ê°€ ê·¸ë ¤ì ¸ ìžˆì„í…ë°, ì •ìƒì ìœ¼ë¡œ ì—°ê²°ì´ ë˜ì—ˆë‹¤ë©´ í•´ë‹¹ ë™ê·¸ë¼ë¯¸ë¥¼ ëˆŒë €ì„ ì‹œ, ë°˜ì‘ì„ í•˜ê²Œ ë©ë‹ˆë‹¤.
>(ì—°ê²°ì´ ë˜ì§€ ì•Šì•˜ì„ ê²½ìš° ì½˜ì†”ì°½ì— ì—ëŸ¬ê°€ ëœ¨ê²Œ ë©ë‹ˆë‹¤. // ì•žì„  ì ˆì°¨ì— ë¬¸ì œê°€ ìžˆì—ˆê±°ë‚˜, ì•„ë‘ì´ë…¸ì™€ì˜ ì—°ê²°ì´ ë¶ˆì•ˆì •í•œ ìƒí™©ìž…ë‹ˆë‹¤.)

>ps. ì—°ê²°í•˜ê¸°ê°€ ê½¤ë‚˜ íž˜ë“¤ ìˆ˜ ìžˆìŠµë‹ˆë‹¤.

>ps2. ì•„ë‘ì´ë…¸ ë©”ê°€ì™€ exp8266-01ì„ ì‚¬ìš©í•˜ì˜€ìŠµë‹ˆë‹¤. ì•„ë‘ì´ë…¸ ë©”ê°€ ëª¨ë¸ ì¤‘ì—ì„œëŠ” MEGA 2560ì„ ì‚¬ìš©í•˜ëŠ” ê²ƒì´ ê°€ìž¥ ì„±ê³µë¥ ì´ ë†’ì•˜ìŠµë‹ˆë‹¤.

>ps3. ê°€ë” ì „ë ¥ ê³µê¸‰ì´ ì›í• í•˜ì§€ ëª»í•˜ì—¬ esp8266ì´ êº¼ì¡Œë‹¤ ì¼œì¡Œë‹¤ í•˜ëŠ” í˜„ìƒì´ ë°œìƒí•˜ëŠ”ë°, íŠœí† ë¦¬ì–¼ ë§í¬ì— ë‚˜ì˜¨ê²ƒ ì²˜ëŸ¼ ì¶”ê°€ì ì¸ ì „ì› ê³µê¸‰ìž¥ì¹˜ë¥¼ ì‚¬ìš©í•˜ëŠ” ê²ƒ>ë„ í•œ ë°©ë²•ìž…ë‹ˆë‹¤.



## 2. master ëª¨ë“ˆê³¼ slave ëª¨ë“ˆ, skinì˜ ì‚¬ìš©ë²•

>1. skin ì€ masterë‚˜ slaveì˜ GPIO 12ë²ˆ í•€ì— ì—°ê²°í•´ ì£¼ì‹œê¸° ë°”ëžë‹ˆë‹¤.
>2. master moduleì˜ ê²½ìš°, 2~9ë²ˆ GPIOí•€ì„ í†µí•´ ëª…ë ¹ì„ ë‚´ë¦´ ì˜ˆì •ì¸ë°, í•´ë‹¹ í•€ì€ 1~8 ë²ˆ í¬íŠ¸ì— í•´ë‹¹í•©ë‹ˆë‹¤.
>3. slave ëª¨ë“ˆì˜ ê²½ìš°, 2~9ë²ˆ í•€ê³¼ ì—°ê²°ëœ í¬íŠ¸ë¥¼ í†µí•´ ëª…ë ¹ì„ ë°›ìŠµë‹ˆë‹¤.


## 3. êµ¬í˜„í•´ì•¼ í•  ëª©ë¡

>1. skin ëª¨ë“ˆì˜ ì¢…ë¥˜ê°€ ê²°ì •ì´ ë˜ë©´, í•´ë‹¹ skin ëª¨ë“ˆì— ëŒ€í•œ ìž‘ì—…ì— ë“¤ì–´ê°ˆ ê²ƒìž„ (ê¸°ë³¸ì ìœ¼ë¡œëŠ” 4ê°œ ì˜ˆìƒ)
>2. ui ê°œì„ ì•ˆì´ ìžˆë‹¤ë©´ ì¶”ê°€ì ì¸ ui ê°œì„ 
>>>>>>> cf1d59fc01b8bf20a84b6171d56db022ce2e7229
>3. 




<<<<<<< HEAD
###### »ç¿ëÇÏ½Ã´Ù ±Ã±ÝÇÏ½Å Á¡ÀÌ ÀÖ´Ù¸é, ÄÚ¸àÆ®¸¦ ³²°Ü ÁÖ½Ã°Å³ª ¸Þ¼¼Áö¸¦ º¸³» ÁÖ½Ã¸é ´äº¯ÇØ µå¸®µµ·Ï ÇÏ°Ú½À´Ï´Ù.
=======
###### ì‚¬ìš©í•˜ì‹œë‹¤ ê¶ê¸ˆí•˜ì‹  ì ì´ ìžˆë‹¤ë©´, ì½”ë©˜íŠ¸ë¥¼ ë‚¨ê²¨ ì£¼ì‹œê±°ë‚˜ ë©”ì„¸ì§€ë¥¼ ë³´ë‚´ ì£¼ì‹œë©´ ë‹µë³€í•´ ë“œë¦¬ë„ë¡ í•˜ê² ìŠµë‹ˆë‹¤.
>>>>>>> cf1d59fc01b8bf20a84b6171d56db022ce2e7229
