# burger
## App Setup ##
* Create a GitHub repo called burger and clone it to your computer.
* Make a package.json file by running npm init from the command line.
* Install the Express npm package: npm install express.
* Create a server.js file.
* Install the Handlebars npm package: npm install express-handlebars.
* Install MySQL npm package: npm install mysql.
* Require the following npm packages inside of the server.js: express


## Directory structure ##
All the recommended files and directories from the steps above should look like the following structure:
---------------------------------------------------------------------------------------------------------
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
        
        
        
I created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. Using the MVC design pattern; I used Node and MySQL to query and route data in my app, and Handlebars to generate my HTML.
