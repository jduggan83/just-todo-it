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

- Input validation on save
- clear completed: Add index on deleted (or completed), and attempt to query by it
	 
#### Nice to have

- strikethrough on completed items
- page transitions using https://elements.polymer-project.org/elements/neon-animation?view=demo:demo/index.htm&active=neon-animated-pages
- iron-ripple on list button
