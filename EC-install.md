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
Clone the repository from Pantheon in your Projects folder:

```
cd ~/Projects
git clone ssh://codeserver.dev.fa0c87bc-6677-497c-93ba-c3e7ee868c7e@codeserver.dev.fa0c87bc-6677-497c-93ba-c3e7ee868c7e.drush.in:2222/~/repository.git upstream-d9
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
NOTE: If you get any errors with that or it jsut plain doesn't work, you can always grab a database backup from the live site in the pantheon dashboard, download it to /Projects/upstream-d9, unzip and rename it to database.sql


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

## More information
The front-end theme can be found at /web/themes/citizen_patterns.  There is a theme-install.md doc there.
The admin theme can be found at /web/themes/crane.  There is also theme-install.md doc there.

