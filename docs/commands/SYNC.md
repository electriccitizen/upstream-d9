# fin sync
[back to README](../../README.md)

The ```fin sync``` command is used to reset your local environment against the upstream environment, with optional database sync. In order, this command runs:

1. ```fin up``` (or ```fin reset```) to verify and recreate Docksal services

2. ```git status``` to check for a clean branch

3. ```git pull``` against the upstream branch to make sure you have the latest code

4. ```composer install```  to install project dependencies

5. ```drush sql-sync``` to clone the database from the upstream environment (optional)

6. ```drush updb``` to verify and update database changes

7. ```drush entup``` to verify and update entity definitions

8. ```drush cim``` to import verify configuration sanity

9. ```drush cr``` to verify a successful cache clear

After running ```fin sync``` successfully, you will have an exact clone of the upstream environment (code and database.) See other [available commands](COMMANDS.md) here.

**Flags**

```--skipdb``` will allow you to skip the database sync. This can be helpful if you have sample content you wish to preserve.

```--skipcim``` will allow you to skip the configuration import. This can be useful if you need to capture active configuration from the upstream site that has not been exported to code.

[back to README](../../README.md)

*<small>This is an auto-generated document. Keep any custom documents in the ```custom``` folder.</small>*
