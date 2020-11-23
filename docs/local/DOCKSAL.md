# Working with Docksal
[back to README](../../README.md)

**You may want to view your web server logs to troubleshoot Drupal errors:**

```fin logs web```

**You might want to see a list of your Docksal projects and their current status:**

```fin project list -a```

**You may want to force a reload of your project configuration:**

```fin up```

**You may want to stop your project:**

```fin stop```

**You may want to stop ALL of your running projects:**

```fin project stop -a``` 

**You may want to restart (project services) OR reset (recreate all services and containers):**

```fin restart``` or ```fin reset```

**You may want to stop and completely remove your containers:**

```fin remove```

**You may want to reset all Docksal system services and settings:**

```fin system reset``` 

**You may want to run commands on your database:**

```fin db help```

**You may want to interact directly with your virtual machine:**

```fin vm ssh```

```fin vm help``` for more commands

**You may want to examine your Docskal config for debugging:**

```fin config```

**You may want to run drush, drupal console or terminus commands against your services:**

```fin drush <command>```

```fin drupal <command>```

```fin terminus <command>```

**You may want to cleanup and and remove unused Docker images and projects**

```fin cleanup```

**You may want to see update Docksal or see which version you are running:**

```fin version```

```fin update```

[back to README](../../README.md)





