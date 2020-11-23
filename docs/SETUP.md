# INITIAL SETUP
[back to README](../README.md)

* Add your public key to your Pantheon account, and be on the team [(?)](https://pantheon.io/docs/ssh-keys/)
* Add your public key to your Github account, and be on the team [(?)](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)
* Update your Pantheon aliases (```terminus aliases```)


**Install Terminus and authenticate via machine token**

Follow the [Terminus install instructions](https://pantheon.io/docs/terminus/install/) to install and generate a machine token for authentication. (Save your token somewhere safe in case you need it later.) If you are already running Terminus you can check your version:

```terminus --version``` and [update Terminus](https://pantheon.io/docs/terminus/updates/) if you are running an older version.

```terminus auth:login``` to verify you can authenticate via machine token

```terminus aliases``` to refresh your Pantheon aliases

Terminus will periodically alert you to you updated versions; as a general rule it is good practice to run the latest version.

**Install VirtualBox (5.1.28 or higher)**

VirtualBox is available for Mac, PC and Linux and can be [installed manually](https://www.virtualbox.org/wiki/Downloads) on your platform. If necessary, you can update to a new version or manage your virtual machines using VirtualBox Manager GUI. 

The VirtualBox Manager GUI will periodically alert you to new versions; as a general rule it is good practice to keep VirtualBox up-to-date.

**Install Docksal (One-time setup)**

Follow the [one-time setup instructions](https://docs.docksal.io/en/master/getting-started/env-setup/) for your platform.

**Be sure to set your default project folder**

Docksal is opinionated, and will not work if you attempt to start a container from outside your defined project folder. By default, Docksal sets /Users/*[username]*/Projects as its default project folder.  You can change this to another location during setup, but be sure to clone all of your projects into the folder you define. 

**Post install**

Docksal sometimes is unable to detect its own projects folder. Once you have installed Docksal edit your global docksal.env file and define your path to your project folder:

Open ```~/.docksal/docksal.env``` in an editor and add the following line:
 
``` DOCKSAL_NFS_PATH="~/Projects" ```
 
 or 
 
 ``` DOCKSAL_NFS_PATH="/Users/<your-username>/<your-projects-folder>" ```

You are now finished with initial onboarding process and can [get started](../README.md) for this and any future Docksal projects. 

[back to README](../README.md)

*<small>This is an auto-generated document. Keep any custom documents in the ```custom``` folder.</small>*