
ABOUT Citizen PATTERNS THEME
------------

Citizen Patterns is an Atomic design based Pattern Lab theme by Electric Citizen, http://www.electriccitizen.com. 

For Drupal 8, Citizen Patterns uses Emulsify by Four Kitchens as a starting place. The Emulsify Gulp npm package is a dependency of the Citizen Patterns theme.

Citizen Patterns is a default theme that comes along with each Drupal 8 site by Electric Citizen. Base elements such as content types, menus and paragraph widgets are pre-themed but can be customized on a per site basis as needed.

Since Citizen Patterns is a Pattern Lab theme, the ```npm start``` command run in the theme root will spin up a local Pattern lab instance in Google Chrome (you must have the theme installed: ```npm install```). 

Pattern Lab can be deployed as a living styleguide by running ```npm run deploy```. This will build a /build folder in the theme root (if you get an error about /build not existing just run again) and deploy that folder to the gh-pages branch of the project repo. If no gh-pages branch exists, it will create one. You can then view the living style guide on this url: https://electriccitizen.github.io/< my project >/pattern-lab/public. For production sites, a custom url should be used: https://help.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site


GETTING STARTED
--------------------

Working with Citizen Patterns requires a few things: 
(a) working knowledge of Sass, Twig, Jquery
(c) use of the command line (e.g. Terminal) and a good IDE (e.g. Sublime Text)

To get started:
(a) get a local site instance spun up following the instructions in the site repo.
(b) Make sure you have npm installed globally and that you are using version 6 or later. You can check this by running: npm -v in any command line window.
(c) Make sure you have node installed globally and that you are using version 11 or later. You can check this by running: npm -v in any command line window.
(d) cd into the folder for citizen_patterns in the command line
(e) run: npm install

Working: 
(a) cd into the citizen_patterns folder in the command line
(b) run: npm start

-- This will trigger many things: SVG Icons in citizen_patterns/images/icons/src will be compiled into a svg sprite and assigned mixins and css selectors, Scss files will be linted and compiled, js files will be listed and compiled, a local Pattern Lab instance will be opened in Google Chrome.

Other notes:
-- theme tasks are all run by the npm start script defined in package.json. New tasks can be added to that script and existing tasks defined in that script can be customized in local.gulp-config.js.


PATTERN LAB
----------------------------
All Pattern Lab top-level folders can be renamed except the 00-base folder. Pattern Lab will die and the theme will not compile anything without 00-base. If folders are renamed make sure the libraries.yml, styles.scss, components section of .info.yml, Pattern Lab .md files and all inherited twig file paths are a updated accordingly.

The styleguide main header is set in 00-base/base.md and the main section titles are set in .md files inside each top level folder.

The theme currently has issues with js and Pattern Lab. For some reason, getting JS files from the theme into a place where Pattern Lab can read them both locally and post-deploy is tricky—especially since we don't want every JS file in the theme to be used in Pattern Lab. For this reason, currently any JS you do want to work in Pattern Lab must be manually added to the styleguide.js file in ./components/js. To see it in PL locally, run ```npm run jsRefresh``` and refresh your browser tab. To get it to the living styleguide run ```npm run deploy```.

