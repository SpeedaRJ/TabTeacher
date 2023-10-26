//
// Copyright 2015 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

// FirebaseRoom_ESP8266 is a sample that demo using multiple sensors
// and actuactor with the FirebaseArduino library.


#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
#include <avr/power.h>  // Required for 16 MHz Adafruit Trinket
#endif

#define PIN_NEO_PIXEL_BIG 19  // Arduino pin that connects to NeoPixel
#define NUM_PIXELS_BIG 58     // The number of LEDs (pixels) on NeoPixel

#define PIN_NEO_PIXEL_SMALL 10  // Arduino pin that connects to NeoPixel
#define NUM_PIXELS_SMALL 6      // The number of LEDs (pixels) on NeoPixel

Adafruit_NeoPixel NeoPixelBig(NUM_PIXELS_BIG, PIN_NEO_PIXEL_BIG, NEO_GRB + NEO_KHZ800);
Adafruit_NeoPixel NeoPixelSmall(NUM_PIXELS_SMALL, PIN_NEO_PIXEL_SMALL, NEO_GRB + NEO_KHZ800);

#include <WiFi.h>
#include <Firebase_ESP_Client.h>

#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"

#define DATABASE_URL "https://tabteacher---sei-23-default-rtdb.firebaseio.com/"
#define API_KEY "AIzaSyC7M_2t6fnzLk25hquBprFqGVRSTZ7ndnQ"
// #define WIFI_SSID "AndroidAP5307"
// #define WIFI_PASSWORD "89642feb6d97"
#define WIFI_SSID "HUAWEI Mate 20 Pro"
#define WIFI_PASSWORD "DexTheCat"

FirebaseData fbdo;

FirebaseAuth auth;
FirebaseConfig config;

int current_led = -1;
int string_int = -1;
int tab_int = -1;
String current_combination = "";
bool signupOK = false;
int operationalIndex1 = 0;
int operationalIndex2 = 0;
int iter = 0;
int noteValue = -3;

int colorSet[6][3] = { { 251, 32, 17 }, { 235, 245, 67 }, { 122, 246, 244 }, { 231, 160, 58 }, { 81, 214, 26 }, { 231, 58, 245 } };

void setup() {
  NeoPixelBig.begin();
  NeoPixelSmall.begin();
  WiFi.mode(WIFI_STA);

  Serial.begin(19200);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());

  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;

  if (Firebase.signUp(&config, &auth, "", "")) {
    Serial.println("Firebase Signup Ok");
    signupOK = true;
  } else {
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  config.token_status_callback = tokenStatusCallback;

  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void loop() {
  NeoPixelBig.clear();
  NeoPixelSmall.clear();

  Serial.println("Getting Data");

  if (Firebase.ready() && signupOK) {

    NeoPixelSmall.setPixelColor(0, NeoPixelSmall.Color(colorSet[0][0], colorSet[0][1], colorSet[0][2]));
    NeoPixelSmall.setPixelColor(1, NeoPixelSmall.Color(colorSet[1][0], colorSet[1][1], colorSet[1][2]));
    NeoPixelSmall.setPixelColor(2, NeoPixelSmall.Color(colorSet[2][0], colorSet[2][1], colorSet[2][2]));
    NeoPixelSmall.setPixelColor(3, NeoPixelSmall.Color(colorSet[3][0], colorSet[3][1], colorSet[3][2]));
    NeoPixelSmall.setPixelColor(4, NeoPixelSmall.Color(colorSet[4][0], colorSet[4][1], colorSet[4][2]));
    NeoPixelSmall.setPixelColor(5, NeoPixelSmall.Color(colorSet[5][0], colorSet[5][1], colorSet[5][2]));

    NeoPixelSmall.setBrightness(10);

    if (Firebase.RTDB.get(&fbdo, "string_0")) {
      current_combination = fbdo.stringData();
      int index = current_combination.indexOf(",");
      bool hasZero = current_combination.substring(0, index) == "true";
      String stringZero = current_combination.substring(index + 1, current_combination.length());
      int stringZero_int = stringZero.toInt();
      Serial.print("Zero Configuration: " + String(hasZero) + ", " + stringZero + " = ");
      if (hasZero) {
        NeoPixelSmall.setPixelColor(stringZero_int, 0, 0, 0, 0);  // This should turn off the light if possible
      }
    }

    if (Firebase.RTDB.get(&fbdo, "string_1")) {
      current_combination = fbdo.stringData();

      iter = 0;
      operationalIndex1 = 0;
      operationalIndex2 = 0;

      operationalIndex1 = current_combination.indexOf(",");
      noteValue = current_combination.substring(0, operationalIndex1).toInt();
      Serial.print("Note-0: " + String(noteValue) + "; ");
      if (noteValue != -3) {
        NeoPixelBig.setPixelColor(noteValue,
          NeoPixelBig.Color(colorSet[iter][0], colorSet[iter][1], colorSet[iter][2]));
      }

      for (iter = 1; iter < 6; iter++) {
        operationalIndex2 = current_combination.indexOf(",", operationalIndex1 + 1);
        noteValue = current_combination.substring(operationalIndex1 + 1, operationalIndex2).toInt();
        Serial.print("Note-" + String(iter) + ": " + String(noteValue) + "; ");
        if (noteValue != -3) {
          NeoPixelBig.setPixelColor(noteValue,
            NeoPixelBig.Color(colorSet[iter][0], colorSet[iter][1], colorSet[iter][2]));
        }
        operationalIndex1 = operationalIndex2;
      }
    }
  }

  Serial.print("\n");

  NeoPixelBig.setBrightness(10);

  NeoPixelBig.show();
  NeoPixelSmall.show();

  delay(100);
}
