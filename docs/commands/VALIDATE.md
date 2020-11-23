# fin validate
[back to README](../../README.md)

The ```fin validate``` command is used pull in changes from team members to validate your feature against the current upstream. You should only run this command AFTER you have exported and committed your own work. In order, this command runs:

1. ```fin up``` (or ```fin reset```) to verify and recreate Docksal services

2. ```git status``` to check for a clean feature branch

3. ```git pull``` against the upstream branch to make sure you have the latest code

4. ```composer install```  to install project dependencies

5. ```drush sql-sync``` to clone the database from the upstream environment (optional)

6. ```drush updb``` to verify and update database changes

7. ```drush entup``` to verify and update entity definitions

8. ```drush cim``` to import verify configuration sanity

9. ```drush cr``` to verify a successful cache clear

If you see errors while running ```fin validate```, you will need to work with the team to understand, fix, and commit conflicting file(s) or other errors. See other [available commands](COMMANDS.md) here.

[back to README](../../README.md)

*<small>This is an auto-generated document. Keep any custom documents in the ```custom``` folder.</small>*

