# [Raspberry Pi Pico W](https://www.raspberrypi.com/products/raspberry-pi-pico/) Setup

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

2. When you're done, you'll probaby need to set up the proper permissions for your user to be able to access the USB serial port (via `/dev/ttyACM0`):

    ```
    sudo usermod -a -G dialout $USER
    ```

    After running this command, you'll need to at least log out and back in. If that doesn't work, try restarting the computer.


# VS Code setup

Install VS Code on your computer and install the following extensions:

- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) for (Micro) Python support
    - [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance), if not installed with Python extension by default
- [MicroPico](https://marketplace.visualstudio.com/items?itemName=paulober.pico-w-go) for running/transferring files to/from your board
- [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode) for intelligent code completion

You can also install the extentions by running:

```
$ code --install-extension ms-python.python
$ code --install-extension visualstudioexptteam.vscodeintellicode
$ code --install-extension ms-python.vscode-pylance
$ code --install-extension paulober.pico-w-go
```

## Optionally

Optionaly, you can set your `PICO_SDK_PATH`:
```
export PICO_SDK_PATH=/home/pi/pico/pico-sdk
```

## Init/configure project

Go ahead and open a folder and press `Ctrl-Shift-P` (or `Cmd-Shift-P` on a Mac) to open the VS Code command palette and
select `MicroPico -> Configure Project`. Then click on the "Pico Disconnected" button on the bottom (blue) toolbar, you
should be connected to your Pico.

## More info

- https://randomnerdtutorials.com/raspberry-pi-pico-vs-code-micropython/
- https://micropython-stubs.readthedocs.io/en/latest/22_vscode.html


# MicroPython

- https://docs.micropython.org/en/latest/develop/gettingstarted.html


# NeoPixel docs

- [AdaFruit GitHub](https://github.com/adafruit/Adafruit_NeoPixel)
- [MicroPython](https://docs.micropython.org/en/latest/rp2/quickref.html#neopixel-and-apa106-driver)
- [Random Nerds Tutorials: Raspberry Pi Pico and Pico W Projects, Tutorials and Guides](https://randomnerdtutorials.com/projects-raspberry-pi-pico/)