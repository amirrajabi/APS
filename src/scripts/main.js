import jQuery from 'jquery';
window.jQuery = window.$ = jQuery.noConflict();
window.foundation = require('foundation-sites');

$(document).ready(function () {
    $(document).foundation();
    console.log('APS run!');
});