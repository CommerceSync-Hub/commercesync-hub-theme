const mix = require('laravel-mix');

mix.js('src/app.js', './')
    .sass('src/app.scss', public/css);