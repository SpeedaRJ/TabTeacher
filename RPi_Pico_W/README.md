# Raspberry Pi Pico W Setup

The program here is writen in MicroPython so you have to set it up on your RPi Pico W. To do so, follow either of these instructions:


## Via RPi official instructions

Go to [Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/microcontrollers/micropython.html) and download [the latest Micro Python firmware for your Pico W]( https://micropython.org/download/rp2-pico-w/rp2-pico-w-latest.uf2).

Then go ahead and:

1. Push and hold the BOOTSEL button and plug your Pico into the USB port of your Raspberry Pi or other computer. Release the BOOTSEL button after your Pico is connected.

2. It will mount as a Mass Storage Device called RPI-RP2.

3. Drag and drop the MicroPython UF2 file onto the RPI-RP2 volume. Your Pico will reboot. You are now running MicroPython.

4. You can access the REPL via USB Serial.


## Via Thonny IDE (for Linux)

See these instructions for help: [Getting Started with Raspberry Pi Pico (and Pico W)](https://randomnerdtutorials.com/getting-started-raspberry-pi-pico-w/)

1. Download and install [Thonny IDE](https://thonny.org/)
    
    1. If you're using Ubuntu, don't install it via Ubuntu Software, because the snaps environment doesn't allow it to work properly. You can easily install it by using this command/script

        ```
        bash <(wget -O - https://thonny.org/installer-for-linux)
        ```

2. When you're done, you'll probaby need to set up the proper permissions for your user to be able to access the USB port:

    ```
    sudo usermod -a -G dialout $USER
    ```

    After running this command, you'll need to at least log out and back in. If that doesn't work, try restarting the computer.


## Via VS Code (Thonny alternative)

I used the [MicroPico](https://github.com/paulober/MicroPico) extension for VS Code to connect to our Raspberry Pi Pico W. 

The only two things to know are that to connect to the Pico W, you first follow the MicroPython instructions, and then use the command `MicroPico: Configure Project`, followed by the `MicroPico: Connect` command from the command palette.

Then you can open the boards file system and run python files using the command buttons on the bottom task bar of VS Code.


# NeoPixel docs

- [AdaFruit GitHub](https://github.com/adafruit/Adafruit_NeoPixel)
- [MicroPython](https://docs.micropython.org/en/latest/rp2/quickref.html#neopixel-and-apa106-driver)


# Bluetooth (BLE) example

- [BLE Blog Example](https://electrocredible.com/raspberry-pi-pico-w-bluetooth-ble-micropython/)

Make sure to save the files from the `./ble_test` folder to the root of the Pico W, and then run the `main.py` file form the Pico W itself.

To test the connection, I used the application [Serial Bluetooth Terminal](https://play.google.com/store/apps/details?id=de.kai_morich.serial_bluetooth_terminal) from the Google Play Store.