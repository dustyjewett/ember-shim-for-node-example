require('babel-core/register')({
    // Uses negative-lookahead to exclude known modules from being excluded.... and I've gone cross-eyed.
    ignore: /node_modules\/(?!ember-intl)/
});