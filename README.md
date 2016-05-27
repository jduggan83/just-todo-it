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
	  1. try again using paper-checkbox - https://elements.polymer-project.org/elements/paper-checkbox?view=demo:demo/index.html&active=paper-checkbox
	  2. Server syncing - test authentication
	  4. improve package.json and this readme on the install steps
	  5. what do shared-styles do? figure this out and look to remove any common styling not required
	  3. Add index on deleted (or completed), and attempt to query by it - for clear completed
	  5. add stying to list - like strikethrough and border
	  5. page transitions using - 	  https://elements.polymer-project.org/elements/neon-animation?view=demo:demo/index.html&active=neon-animated-pages
	  6. view task page maybe? with edit button
	  
