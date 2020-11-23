# Following a safe workflow (D8)

[back to README](../../README.md)

If you practice the workflow outlined below, you will avoid most common problems. This document includes a few specific ```fin``` (docksal) commands, but the general principles and commands apply to all local environments (DrupalVM, Lando, DDEV, ADD, Mamp, custom stack, etc.) and should be followed to make for a happier team.

## Get in sync

Following these steps, will ensure that you are in one-to-one state with the development server, and that everything is working correctly prior to starting a new task.

```git status``` to make sure you have a clean master branch with no uncommitted work

```git pull origin master``` to make sure you have the latest code

```composer install``` to install any new dependencies

```fin drush sql-sync @<site>.dev @self``` to get a fresh database (optional)

```fin drush cim``` to import and verify configuration

```fin drush updb``` to verify your db is up-to-date

```fin drush entup``` to verify your entity definitions are current

```fin drush cr``` to verify a successful cache clear

**Using fin sync**

```fin sync``` is a helper that runs all of the commands above, in order, and is highly recommended to get into a one-to-one state with development.

*IMPORTANT: As noted above, the database sync is optional. However, it is critical that you run ```fin drush cim``` after pulling from master to import new configuration into your database and to your active configuration. If you fail to do so, any newly added configuration will be lost the next time you do a configuration export.*

## Create a feature branch and begin your task

Once you have a working local copy in a safe state:

```git checkout -b <my-new-branch>```

This will create and checkout a new feature branch where you can begin your task. 

## Safely export and deploy your work

Before deploying you need to make sure that your branch still works against the master branch, and that you capture any new configuration that has been added to the project by other team members.


```fin drush cex``` to export your active configuration into code

```git add``` to add any new configuration, theme, or custom module files

```git commit``` to get your feature branch into a safe and known state

```git pull origin master``` to merge in changes from other team members *[1]*

```composer install``` to install any new dependencies *[1]*

```fin drush updb``` to verify a working database udpate *[1]*

```fin drush entup``` to run any needed entity updates *[1]*

```fin drush cim``` to verify a working configuration import *[1]*

```fin drush cr``` to verify a successful cache clear *[1]*

```git push``` to push your branch up to Github once all of the above works

**Using fin validate**

*[1]* ```fin validate``` is a helper command that verifies your feature branch is a clean state, runs all of the commands marked as [1] in the above list. This command automatically validates your working branch against changes that have made by other team members. Be sure to export and commit your changes prior to running ```fin validate```.

## Safe module updates

```composer udpate drupal/<my-module --with-dependencies```

```fin drush updb```

```fin drush cex```

```git add```

```git commit```

```git push```
## You're doing it wrong

The workflow above is designed to prevent you from making common mistakes:

**If you simply EXPORT and merge your code into master without testing** against the lastest changes, you risk losing the work of your team members, or causing a broken build that will need to be resolved.  

**If you MERGE before you export** you will lose the new configuration from your team during export. The ```drush cex``` process deletes and regenerates your config files, so everything may work fine for you, but you will not actually be verifying against the latest work in the master branch.

**If you MERGE before you commit your code** you will have no simple way to revert back to your safe state, and will have to manually clean up merge conflicts before continuing. This is not fun.

**IF you MERGE but fail to run ```drush cim```** you will lose any new changes the next time you run an export. 

**If you IMPORT configuration before you export** you will lose your active work with no way to recover. If you pull from master and import new configuration prior to exporting your own work, it is gone forever.

**If you don't run ```drush updb``` or ```drush entup``` to verify** after merging the master branch, you could inadverntely end up with a broken database.

**If you MERGE code from master before you export** you will lose the new configuration during the export.

There are lots of things that can go wrong, but if you understand and follow the recommended workflow you will help to eliminate 99% of the typical problems.

[back to README](../../README.md)  





