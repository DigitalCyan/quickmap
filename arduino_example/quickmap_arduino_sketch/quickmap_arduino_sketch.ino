// Vars

bool allow_input = true;

void setup() {
  // Input assignment
  for(int i = 2; i <= 4; i++){
    pinMode(i, INPUT);
  }
  
  // Initilize serial port
  Serial.begin(9600);
}

void loop() {
  
  if(allow_input && digitalRead(2)){
    Serial.write("button_1");
    allow_input = false;
  }

  if(allow_input && digitalRead(3)){
    Serial.write("button_2");
    allow_input = false;
  }

  if(allow_input && digitalRead(4)){
    Serial.write("button_3");
    allow_input = false;
  }

  if(!digitalRead(2) && !digitalRead(3) && !digitalRead(4)){
    allow_input = true;
  }
}
