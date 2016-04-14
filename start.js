import Ember from "ember";
var jsdom = require('jsdom').jsdom;
var document = jsdom('<html></html>', {});
var window = document.defaultView;
var $ = require('jquery')(window);

// jsdom provides a LOT of primitives, like Node and other classes... we want to copy them over to globals
function propagateToGlobal (window) {
    for (let key in window) {
        if (!window.hasOwnProperty(key)) continue;
        if (key in global) continue;
        global[key] = window[key]
    }
}

propagateToGlobal(window);
Ember.$ = $;
GLOBAL.document = document;
GLOBAL.window = window;
require('./process');
