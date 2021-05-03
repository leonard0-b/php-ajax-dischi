let mix = require('laravel-mix');
 mix.js('src/main.js', 'js')
 .sass('src/master.scss','css')
 .setPublicPath('assets/')
 .options({
    processCssUrls: false
});