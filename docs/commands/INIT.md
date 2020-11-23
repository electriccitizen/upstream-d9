# fin init
[back to README](../../README.md)

The ```fin init``` command is used to spin up your local environment for the first time, or to completely reset your project. In order, this command runs:

1. ```git status``` to check for a clean feature branch

2. ```fin up``` (or ```fin reset```) to verify and recreate Docksal services

3. ```git pull``` against your upstream branch to make sure you have the latest code

4. ```composer install```  to install Drupal and all dependencies

5. ```drush sql-sync``` to clone the database from the upstream environment 

6. ```drush updb``` to verify and update database changes

7. ```drush entup``` to verify and update entity definitions

8. ```drush cim``` to import verify configuration sanity

9. ```drush cr``` to verify a successful cache clear

After running ```fin init``` successfully, you will have an exact clone of the upstream environment (code and database.) During active development, you will typically run the [fin sync](SYNC.md) command instead of ```fin init```. See other [available commands](COMMANDS.md) here.

[back to README](../../README.md)

*<small>This is an auto-generated document. Keep any custom documents in the ```custom``` folder.</small>*
