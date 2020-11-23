/* globals module */

(() => {
  const themeDir = './';
  const paths = {
    js: `${themeDir}/components/_patterns/**/*.js`,
    dist_js: `${themeDir}/dist`,
    sass: themeDir,
    icons: `${themeDir}/images/icons/src`,
    img: [
      `${themeDir}/images/**/*`,
      `${themeDir}/components/_patterns/**/*.{jpg, gif, png, svg}`,
    ],
    dist_css: `${themeDir}/dist/css`,
    pattern_lab: `${themeDir}/pattern-lab/public`,
    logo: `${themeDir}/logo.png`,
  };  

  module.exports = {
    host: 'http://127.0.0.1:8888/',
    themeDir,
    paths,
    sassOptions: {
      outputStyle: 'expanded',
      eyeglass: {
        enableImportOnce: false
      }
    },
    cssConfig: {
      src: `${themeDir}/components/_patterns/**/*.scss`,
      dest: `${themeDir}/dist/`,
      flattenDestOutput: true,
      lint: {
        enabled: false,
        failOnError: true
      },
      cleanCSS: {
        enabled: true,
        options: {
          compatibility: '*',
          format: false,
          inline: 'local',
          inlineTimeout: 5000,
          level: 1,
          rebase: true,
          sourceMap: false,
          sourceMapInlineSources: false
        }
      },
      sourceComments: false,
      sourceMapEmbed: false,
      outputStyle: 'expanded',
      autoPrefixerBrowsers: ['last 2 versions', 'IE >= 11'],
      includePaths: ['./node_modules'],
    },
    iconConfig: {
      shape: {
        dimension: {
          maxWidth: 80,
          maxHeight: 80
        },
        spacing: {         // Add padding
          padding: 0
        }
      },
      mode: {
        css: {
          bust: false,
          dest: themeDir + '/dist',
          prefix: '@mixin sprite-%s',
          render: {
            scss: {
              dest: '../components/_patterns/01-parts/01-icons/_icon_sprite.scss',
              template: 'node_modules/emulsify-gulp/gulp-tasks/svg-icons/sprite.scss.handlebars'
            }
          }
        }
      }
    },
    patternLab: {
      enabled: true,
      configFile: themeDir + 'pattern-lab/config/config.yml',
      watchedExtensions: (['twig', 'json', 'yaml', 'yml', 'md', 'jpg', 'jpeg', 'png']),
      scssToYAML: [
        {
          src: `${themeDir}/components/_patterns/00-base/colors/_color-vars.scss`,
          dest: `${themeDir}/components/_patterns/00-base/colors/colors.yml`,
          lineStartsWith: '$',
          allowVarValues: true,
        },
      ],
    },
    browserSync: {
      enabled: true,
      baseDir: './',
      startPath: 'pattern-lab/public/',
      // Uncomment below if using a specific local url
      // domain: 'emulsify.dev',
      notify: false,
      openBrowserAtStart: true,
      reloadOnRestart: true,
      ui: false,
      // Clicks, Scrolls & Form inputs on any device will be mirrored to all others.
      // ghostMode: false to turn all off
      ghostMode: {
        clicks: true,
        forms: true,
        scroll: true,
        location: true
      }
    },
    wpt: {
      // WebPageTest API key https://www.webpagetest.org/getkey.php
      // key:
    },
    pa11y: {
      includeNotices: false,
      includeWarnings: false,
      rules: null,
      standard: null,
      actions: null
    }
  };
})();
