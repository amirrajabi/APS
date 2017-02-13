import jQuery from 'jquery';

import Header from './react/header/Header';

window.jQuery = window.$ = jQuery.noConflict();
window.foundation = require('foundation-sites');

$(document).ready(function () {
    $(document).foundation();
});