# Theming basics

[back to README](../../README.md)


* We use npm and Pattern Lab to theme the site

* Make sure your version of node is at least 6.11.2 and your npm version is at least 5.5.1 (command can be run from anywhere):

```
node -v

npm -v
```

* To update node:

```
npm install -g n
```

* To update npm:

```
npm install npm@latest -g
```

**Install the node modules**
This command only needs to be run when you first install a local instance of the site.

```
cd /web/themes/oc_patterns
npm install
```

**Start Pattern Lab and Sass compilation**
This command is run from theme folder, and runs all theming Gulp tasks (Pattern Lab syncing, Sass Linting, Sass Compilation, SGV Sprite building and sprite mixins creation, and scss to YAML configuration for colors):
```
cd <your_project_root>/web/themes/oc_patterns

npm start
```

Once a change is saved in any Pattern Lab file, the change will be reflected in the local Pattern Lab instance (which will refresh automatically).  

If new files are added to the Pattern Lab components, or files are deleted, you must quit the start command in terminal and run it again for the new files structure to be detected.

```
<ctrl> + c

npm start
```

**Pattern Lab File locations**
All Pattern Lab files (twig, scss, and js) are located in oc_patterns/components. Most files used in both Pattern Lab and Drupal are located in the components/\_patterns file. Drupal specific js and some theme libraries can be found in components/js.

All Drupal templates are found in oc_patterns/templates. All custom templates are found in templates/zzz-custom.

We use an atomic approach to Pattern Lab file structure with Global elements for Pattern Lab and Drupal found in \_patterns/00-base. Small elements are found in \_patterns/00-atoms. Larger elements are found in \_patterns/02-molecules, \_patterns/03-organisms and \_patterns/04-pages. Drupal specifc high-level things and Pattern Lab specific styles are found in \_patterns/05-sitewide.

**Hiding files from Pattern Lab**
By default, any file in components/\_patterns is going to be shown in Pattern Lab. You can prevent files from being shown in Pattern Lab by preceding the file name with an underscore. The file will sitll be active, but it will not by displayed in the local Pattern Lab instance. This is handy for things like files that are extended straight into Drupal like \_html.twig.

[back to README](../../README.md)

