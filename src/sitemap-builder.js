
// require("/babel-register")({
//     presets: ["es2015", "react"]
// });

import 'babel-register';
import router from './APP';
import Sitemap from 'react-router-sitemap';

// const router = require('/APP').default;
// const Sitemap = require('react-router-sitemap').default;

(
    new Sitemap(router)
        .build('https://mi-awesome-website.com')
        .save('./public/sitemap.xml')
);