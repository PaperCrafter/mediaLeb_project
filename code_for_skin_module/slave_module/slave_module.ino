const int ledPin =  12;      // LED PIN 변수 선언
const int buttonPin[8] = {2,3,4,5,6,7,8,9};     // 스위치 PIN 변수 선언

void setup() {
  pinMode(ledPin, OUTPUT);   // LED를 출력으로 선언
  for(int i =2; i < 10; i++){
    pinMode(buttonPin[i], INPUT);
  } // 스위치를 입력으로 선언   
}

void loop(){
  int counter = 0;
  for(int i =0; i < 8; i++){
    const int btnPin = digitalRead(buttonPin[i]);
    if(btnPin == HIGH){
      counter++;  
    }
  } // 스위치를 입력으로 선언   

  if (counter>0) // 스위치 HIGH
  {     
    digitalWrite(ledPin, HIGH);  //LED ON
  }
  else // 스위치 LOW
  {
    digitalWrite(ledPin, LOW); //LED OFF
  }
}
