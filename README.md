### Just Todo It

A todo list app written using Polymer, Phonegap connecting to an NodeJS, MongoDB backend.

#### Requirements

- [Install node.js](http://nodejs.org/) version `>=0.10.x`

#### Install

    $ npm install -g phonegap
    $ npm install -g bower

#### Running app

    $ cd project-folder			# change to project directory
    $ npm build-app-android		# build the app for android				 
	  $ npm start					# start the backend server
	  
	  
	  Left todo
	  -------------
	  1. update an element calling - this.$.templateID.render() on the template - http://stackoverflow.com/questions/31081999/dom-doesnt-update-when-property-changes-after-migrating-from-polymer-0-5-to-1-0
	  then change routing to app.route = bla instead of window.location.
    also look at this.templateID.[any method here!!!!!]

	  1. look into firing events - and use this for top menu talking to each component.
	  2. Server syncing
	  3. page transitions using - https://elements.polymer-project.org/elements/neon-animation?view=demo:demo/index.html&active=neon-animated-pages - and doc update on routing
	  4. try again using paper-checkbox
	  5. improve package.json
	  6. finalise this readme
	  
