BSTM Local Development
======================

Reviewed by Adam, 2021-06-18

# Project Details

Drupal 9
Hosted on Pantheon
Project name - upstream-d9
Local Docksal URL - http://upstream-d9.docksal
Default project branch - MASTER


## Pantheon Repo

https://dashboard.pantheon.io/sites/fa0c87bc-6677-497c-93ba-c3e7ee868c7e#dev/code

## Requirements

Make sure you have Docksal installed and meet basic requirements:
https://docs.google.com/document/d/10KZ4-cIcvQLLxON1-G-K0Ilw55OZdpSIKT7UeM16KL0


# Local Development Setup

## Clone repo locally
Clone the repository from Github in your Projects folder:

```
cd ~/Projects
git clone git clone git@github.com:electriccitizen/upstream-d9.git
```

## install modules

```
cd /upstream-d9
```
```
composer install
```

## Start Docksal

```
fin start
```

## Load a copy of LIVE DB

Pull the latest DB backup to local
```
fin drush @upstream-d9.live sql-dump > database.sql

```
NOTE: If you get any errors with that or it just plain doesn't work, you can always grab a database backup from the live site in the pantheon dashboard, download it to /Projects/upstream-d9, unzip and rename it to database.sql


## Import that database
```
fin db import database.sql

```

## Clear the cache
```
fin drush cr

```

## Import local config settings
```
fin drush cim -y

```

## Log into the site
```
fin drush uli

```

# Lando
Using Lando will allow your local environment to work extremely quickly if setup properly.

## Install Lando
Install lando by visiting the releases page of the Lando GitHub repository: https://github.com/lando/lando/releases and installing the latest version there.

_Do not use a package manager to install Lando: you will likely end up with an outdated version._

If lando complains about the wrong version of Docker Desktop you still shouldn't have a problem as long as your Docker version is newer than the minimum specified version.

## The fun stuff
Start off by running
```
lando start
```
If you run into any issues then comment out the `excludes` part of the `.lndo.yml` ad run `lando start` again.

Get a copy of the extracted Pantheon db and place it in the project root directory. Call it whatever you want, but it is suggested to use `database.sql`. Run
```
lando db imoprt database.sql
```

You can now run
```
lando drush cr
lando cim -y
```

You should now be able to access the site using the URL provided by the Lando output. The main problem is speed: this is a good first step to test that your installation is working but the site will be quite slow.

## Making Lando really fast

### Why
The problem with speed comes from the file system translation between the Docker containers and your local environment.

### How to increase speed
There are several thousands of files that are not being regularly updated, but your local file system still has to be synced/translated with the Docker containers. Lando provides a [convenient performance tool](https://docs.lando.dev/config/performance.html) to fix this problem.

The idea is that files not regularly updated can get moved to the Lando Docker containers. Because these files will now be local to your Docker containers they will be read _much_ faster. The directories listed under `exclude` in `.lndo.yml` are the directories that take up the most resources when syncing between Docker and your local file system.

All you have to do is uncomment the `excludes` section of `.lndo.yml` (if it isn't already uncommented), and run `lando rebuild -y`.

### Notes

 - The initial syncing process may take a while. Go get yourself a coffee.
 - After running `lando rebuild -y` you may need to restart Docker Desktop in order for changes to be applied.
 - The `exclude` directories will all be empty on your local machine
 - If you need to update or modify a file from the `exclude` directories, you have a couple options:

 If Composer-related
 ```
lando composer require --save-dev [package_name]
 ```

Otherwise
```
lando ssh
```

If everything worked then your local site should be blazing fast.


## More information
The front-end theme can be found at /web/themes/citizen_patterns.  There is a theme-install.md doc there.
The admin theme can be found at /web/themes/crane.  There is also theme-install.md doc there.

For dev workflow or ticket assistance, ask Adam.

