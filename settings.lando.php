<?php
$databases['default']['default'] = [
  'database' => 'drupal9',
  'username' => 'drupal9',
  'password' => 'drupal9',
  'host' => 'database',
  'driver' => 'mysql',
];

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

$settings['trusted_host_patterns'] = ['^upstream-d9\.lndo.site', '^upstreamd9\.lndo.site', 'localhost'];

