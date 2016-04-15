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
GLOBAL.document = document;
GLOBAL.window = window;

// A lot of things need Ember.$ defined... so we instantiate jquery on top of our jsdom.
Ember.$ = $;

// We need to ensure that our adons aren't ignored... and for some reason this doesn't
// work in .babelrc like it's supposed to.
require("./register-modules");

// Now that everything is setup, let's run our process!
require('./process');
