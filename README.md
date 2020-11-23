# upstream-d9

[![CircleCI](https://circleci.com/gh/electriccitizen/upstream-d9.svg?style=shield)](https://circleci.com/gh/electriccitizen/upstream-d9)
[![Dashboard upstream-d9](https://img.shields.io/badge/dashboard-upstream_d9-yellow.svg)](https://dashboard.pantheon.io/sites/fa0c87bc-6677-497c-93ba-c3e7ee868c7e#dev/code)
[![Dev Site upstream-d9](https://img.shields.io/badge/site-upstream_d9-blue.svg)](http://dev-upstream-d9.pantheonsite.io/)

New Upstream is a Composer-based Drupal 9 application hosted on [Pantheon](http://dashboard.getpantheon.com). Follow this README to create your local environment, and to learn the best practices for effectively contributing to the project.

## Onboarding

See the [setup documentation](docs/SETUP.md) if you are installing VirtualBox, Docksal, or Terminus for the first time. Once you meet the requirements, clone the this repository into your Docksal projects directory and initialize the site:

```cd ~/Projects```

```git clone git@github.com:electriccitizen/upstream-d9.git```

Move to your project's root folder and initialize the site:

```cd upstream-d9```

```composer install```

```fin init```

Once the site is up, you are ready to start working:

* Local: http://upstream-d9.docksal
* Dev: http://dev-upstream-d9.pantheonsite.io
* User: admin/admin (local)

You can run [fin init](docs/commands/INIT.md) any time you want to reset or guarantee that your local environment is in a safe one-to-one state with your upstream environment. 

Here are some other helpful ```fin``` commands that you will likely use in your day-to-day work:

```fin start``` to start your project services (or ```fin up``` if you need to re-load configuration for xdebug etc.)

```fin stop``` to stop your project services (recommended)

See (working with Docksal)[docs/local/DOCKSAL.md] for additional Docksal commands and tips. 

See [troubleshooting Docksal](docs/local/TROUBLESHOOT.md) if things go bad.



## Recommended workflow

Here is a safe workflow that will help prevent lost work and other problems.

```fin sync``` [(?)](docs/commands/SYNC.md) to ensure your local site is synced with the upstream environment before starting a new task 

```git checkout -b <your-feature-branch>``` to checkout a new feature branch and do your thing

```fin drush cex``` to export your changes

```git add``` to add any new configuration, theme, or custom module files 

```git commit``` to commit your changes and get your feature branch into a safe, recoverable state

```fin validate``` [(?)](docs/commands/VALIDATE.md)  to pull in changes from other team members and check your work against the upstream

```git push origin <your-feature-branch>``` to push your feature branch to Github if everything looks good

If you see errors or merge conflicts after running [fin sync](docs/commands/SYNC.md) or [fin validate](docs/commands/VALIDATE.md), you will need to work with the team to understand, fix, and commit the conflicting file(s) or other errors before continuing.

## Submit a Github pull request

Each time you push your feature branch, it triggers a Circle CI build to run tests against the development server. You can continue to push to your branch until your work is complete and your site is passing its automated tests. Once your feature branch looks good and is passing its Circle CI tests, submit a Github pull request against your branch. A project maintainer will review the changes and merge into master.

*Note: Advanced or otherwise approved users can submit and merge their own PRs, and/or merge and push a feature branch directly into master without a formal pull request. Ask if you have questions, and err on the side of caution.*


## Be a good citizen

You are working in a team environment and must follow a few rules. If you are careless, it can lead to:

* Losing all of your uncommitted work (bad)
* Overriding or losing the work of others (worse)
* Uninstallable configuration or deploy errors

See this guide to [following a safe workflow](docs/workflow/WORKFLOW.md) when using configuration management in Drupal 8. The recommended workflow below follows these best practices, and includes two helper commands (```fin sync``` and ```fin validate```) that automate important components of a safe work flow.

## Deploying the styleguide

Upstream ships with a Pattern Lab styleguide baked in. You can deploy the style guide to Github pages by running the ```npm run deploy``` command in the /citizen_patterns folder in the command line. NOTE: You must have the theme installed: ```npm install```.  

Troublshooting:
* You may get an error the very first time you run deploy about the /build folder not existing. If you do, simply run it again.
* You get a 404 error at the styleguide url—GH Pages can take anywhere from a few seconds to 10 minutes to deploy (ususally around 15-20 seconds). During deploy you will get a 404 error. Also make sure that you are going to project repo url and the /pattern-lab/public inside there—otherwise you will get 404. If neither are the issue, ask the lead developer.
* Your changes have not appeared after deploy—wait a minute or two and refresh again to make sure that the deploy is finished. Try a hard refresh (Command+Shift+R) to clear the browser cache for the GH Pages url—it often gets stuck, especially in Chrome.

The default github pages url for the site is: https://electriccitizen.github.io/< my-project-repo >/pattern-lab/public.  This styleguide url should be customized on site launch to a subdomain of the project url—or some other custom url that disconnects it from the project repo page. <a href="https://help.github.com/en/github/working-with-github-pages/about-custom-domains-and-github-pages" target="_blank">Instructions for using a custom domain with gh-pages.</a>


## Next steps

These documents contain other important information about the project and working with your local environment.

* [Available commands](docs/commands/COMMANDS.md) 
* [Following a safe workflow](docs/workflow/WORKFLOW.md)
* [Frontend and theming documentatiob](docs/frontend/THEME.md)
* [Project notes](docs/custom/NOTES.md)
* [Troubleshooting](docs/local/TROUBLESHOOT.md)
* [Working with Docksal](docs/local/DOCKSAL.md)

## Support and feedback

If you need support or find any errors or suggested improvements in this README contact <tim@electriccitizen.com>.

[Back to top](#[Project])

*<small>This is an auto-generated document. Keep any custom documents in the ```custom``` folder.</small>*
