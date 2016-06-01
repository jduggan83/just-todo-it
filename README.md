### Just Todo It

A todo list app written using Polymer, Phonegap, and a local pouchDB which syncs to a couchDB on cloudant.com

#### Requirements

- [Install node.js](http://nodejs.org/) version `>=0.10.x`
    
#### Install

    $ npm install -g phonegap
    $ npm install -g bower
    $ bower install

#### Debugging the app

    $ cd app
    $ phonegap serve
    
#### Building the app

    $ cd app
    $ phonegap build android    #apk file goes to app/platforms/android
    $ phonegap build ios        #on an ios environment only
    
	  
#### Remaining Work

- clear completed: Add index on deleted (or completed), and attempt to query by it
- page transitions using https://github.com/PolymerElements/polymer-starter-kit/blob/master/docs/neon-animated-pages.md
