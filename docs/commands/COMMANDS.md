# Available commands
[back to README](../../README.md)

This document lists all of the common commands you may want to run against your local environment, in addition to more advanced commands for troubleshooting or advanced tasks.

**Common fin commands***

[```fin init```](INIT.md) to intitialize your project for the first time, or to completely reset your container. 

[```fin sync```](SYNC.md) to intitialize your project for the first time, or to completely reset your container. 

[```fin validate```](VALIDATE.md) to intitialize your project for the first time, or to completely reset your container. 

** Other commands**

```fin drush <your-command```

** Docksal VM commands

Control docker machine directly
  ```fin vm <command>```

Commands:
  ```start```                    	Start the machine (create if needed)
  ```stop```                     	Stop the machine
  ```kill```                     	Forcibely stop the machine
  ```restart```                  	Restart the machine
  ```status```                   	Get the status
  ```ssh [command]```            	Log into ssh or run a command via ssh
  ```remove```                   	Remove Docksal machine and cleanup after it
  ```ip```                       	Show the machine IP address
  ```ls```                       	List all docker machines
  ```env```                      	Display the commands to set up the shell for direct use of Docker client
  ```mount```                    	Try remounting host filesystem (NFS on macOS, SMB on Windows)

  ```ram```                      	Show memory size
  ```ram [megabytes]```          	Set memory size. Default is 1024 (requires vm restart)
  ```hdd```                      	Show disk size and usage
  ```stats```                    	Show CPU and network usage

  ```regenerate-certs```         	Regenerate TLS certificates and restart the VM

[back to README](../../README.md)

*<small>This is an auto-generated document. Keep any custom documents in the ```custom``` folder.</small>*


