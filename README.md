#Update
My Edison device got bricked while installing Jubilinux :( Tried to recover it many ways but as it is discontinued and lack of support and most importantly old tools and my lack of knowledge I could not recover it. I got a Raspberry Pi 3 B+ and will continue with that and Will still have master-slave kind of architechure just a bit different way


# plantwatering
Something I am building so I can stop my plants from dying as I forget to water then :(

# Setup

While running the config tool check the 'intel.pdf' and follow accordingly.
Finish step 1 on the config tool.
For 2nd step: download os image manually and select it for install to update the os of edison. (iot-devkit-prof-dev-image-edison-20160606)
Upon finishing go through step 3 and 4 in config tool and setup ssh credentials and wifi.
Close config tool after done.


Use putty or any ssh terminal to connect to the device> use 'root' as username and password what was given on step 3 of config tool
remote connection: ssh + devicename.local + port any.
cable connection: connect 2nd usb cable, push the switch downwards, ssh on the COM? port (find usb serial port in device manager->ports) baud/speed 115200
(press enter twice when the console comes up)


For nodejs:
https://software.intel.com/en-us/xdk/articles/alternatives-to-using-the-intel-xdk-to-develop-nodejs-iot-applications

download filezilla or any remote file browser. connect to the ip address or devicename.local with the same password from step 3 of config tool (SAME PORT AS SSH)
find node_app_slot folder and put project folder in it.
then go in the folder and run 'node yourfile.js' and VOILA!


editing source code remotely with VSCODE:
Install vscode plugin: Remote VSCode
Put in user settings: {
    "remote.port": 52698,  //can be any port
    "remote.onstartup": true,  //if it starts on vscode start up
    "remote.host": "127.0.0.1",  //the ip of the machine where you want to edit your code (local in this case)
}

if you decide set 'remote.onstartup' to 'false' then you can start up the server from the command pallete of vscode.
Type 'Remote: Start Server' or 'Remote: Stop Server' to start/stop the server. Lower bottom side it should show 'starting server'.
after server is connected lower right corner it will show on a wifi like icon 'Remote server ready' on success.
if it says could not start server then check the 'remote.host' in user settings

now open a ssh connection to the remote device, in this case intel edison: eg. 'ssh -R 52698:127.0.0.1:52698 root@kokysedison.local'
for nodejs run 'npm -g install jmate'
now go to the project directory.
now to open any file run with jmate and put the file as parameter. eg 'jmate app.js' and VOILA! the file will be opened in vscode(vscode needs to be running)
(if it does not work, restart everything, double check settings and see remote server is running in vscode, reconnect to remote device)
DO CONSIDER USING 'NODEMON', 'WEBPACK' or other alternatives AFTER THIS POINT as you will edit the files remotely and need to restart your nodejs server manually to reflect the changes.
if you run your server with nodemon it will detect your change(when you save the changes) restart the server for you :)
