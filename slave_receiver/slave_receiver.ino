#include <Wire.h>

const int maxlength = 64;

char buffer[maxlength];
char printable[maxlength];

int received = 0;

void setup() {
  Wire.begin(8);                // join i2c bus with address #8
  Wire.onReceive(receiveEvent); // register event
  Serial.begin(9600);           // start serial for output
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  if (received > 0) {
    memcpy(printable, buffer, maxlength);

    for (int i = 0; i < received; i++) {
      Serial.print(printable[i]);
      if(printable[i]=='1'){
        digitalWrite(LED_BUILTIN, HIGH);
      }
      if(printable[i]=='0'){
        digitalWrite(LED_BUILTIN, LOW);
      }
    } 
    received = 0;
  }
}

// function that executes whenever data is received from master
// this function is registered as an event, see setup()
void receiveEvent(int howMany) {
  received = howMany;
  memset(buffer, 0, maxlength);

  for (int i = 0; i < howMany; i++) {
    buffer[i] = Wire.read();
  }
}
