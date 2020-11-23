<?php
# Docksal DB connection settings.
$databases['default']['default'] = array (
  'database' => 'default',
  'username' => 'user',
  'password' => 'user',
  'host' => 'db',
  'driver' => 'mysql',
);
$settings['hash_salt'] = 'wahoo';


$config['stage_file_proxy.settings']['origin'] = 'http://dev-upstream-d9.pantheonsite.io'; // no trailing slash

/**
 * Skipping permissions hardening will make scaffolding
 * work better, but will also raise a warning when you
 * install Drupal.
 *
 * https://www.drupal.org/project/drupal/issues/3091285
 */
$settings['skip_permissions_hardening'] = TRUE;

$settings['trusted_host_patterns'] = array('^upstream-d9\.docksal');