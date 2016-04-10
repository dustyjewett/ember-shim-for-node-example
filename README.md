# Ember Shim For Node Example

Super simple example of how to setup a node project to import ember.

# Show Me!

    npm install
    npm start

# How?

Two bits of magic.

 * We use a shim package to download ember from bower and export it as a package.
 * We use babel to compile ES6 into CommonJS. 
 
We can now use any business logic written for Ember in Node apps.

# Really?

Well, yes... but I doubt anyone will recommend it.  We're using it as a quick way to migrate business logic (thousands of lines of code) into the server. 
We may never run the code in production, but even if it's only used to compare test results with our migrated code, it'll be worth it!

