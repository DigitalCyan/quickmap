// Vars
bool allow_input = true;

// The setup
void setup() {
  // Pin mode declaration
  for(int i = 2; i <= 4; i++){
    pinMode(i, INPUT);
  }
  
  // Initilize serial port
  Serial.begin(9600);
}

void loop() {
  
  // Check for input and send corresponding serial data
  // Upon recieving input we write some data to the serial, note
  // that the data is different for every button

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

  // Make sure the input control does it's job

  if(!digitalRead(2) && !digitalRead(3) && !digitalRead(4)){
    allow_input = true;
  }
}
