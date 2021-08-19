#  Snake

This is a simple snake game built with the javascript p5 library in ES6 (modules) format. The project has a webpack 
development environment with babel to make the compiled script backwards compatible. Stylelint, jslint 
and eslint are used to keep the code readable.

## Usability

Though this project is for me, wonder32, it is public and you can use it. The only thing you need to change are
SSL_WEBSITE_URL, SSL_KEY and SSL_CERT in webpack.config.js

## setup

After your changed the values in webpack,.config.js for the url and ssl certificates run 

```npm install```

And tho start de development environment

```npm run dev```

To clean de dist folder

```npm run clean```

and to build the priduction environment

```npm run build```
