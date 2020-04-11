In this we did npm init to make package.json file
After that we install npm install mocha chai
After that we install packages (detail given at last) for babel so that es6 code can be converted in to es5 
Then made this .babelrc file this is made so that whenever babel convert the es6 code to es5 it uses this preset(which is combination of different pulgins to convert the code)
Then created a src folder inside that we created two file one with .js extension other with *-test.js
Now in package.json we mentioned under script/test command to run the test


Packages are 

@babel/cli=> internaly using babel/core and can be used from command line not necessary only install if want to use cli

1. @babel/core => which have all method like transformAsync, transformSync, traansformFileSync, traansformFileAsync

2. @babel/register=> this plugin is onl;y require if we want to convert any es6 code to es5 at run time
By using --require @babel/register we can pass the transpiled code to the commands
"test": "abc=test mocha 'src/**/*.test.js' --require @babel/register"
when you will run npm run test it will transpile the code to es5 at run time and then pass the file to mocha

3. @babel/preset-env => This is the combination of all the pulgins(known as preset) which are passed to transform functions like this
//babel.transformSync(code, {"presets": ["@babel/preset-env"]});
when i am manually converting some code from es6 to es5 all the plugins which are part of this preset will pass to this function.
like this 
{ metadata: {},
  options:
   { babelrc: false,
     configFile: false,
     passPerPreset: false,
     envName: 'development',
     cwd:
      '/Users/code -practice/Plain javascript testing-mocha-chai/src/abc',
     root:
      '/Users/code -practice/Plain javascript testing-mocha-chai/src/abc',
      // these plugins array is generated from preset (as preset is combination of plugins only)
     plugins:
      [ [Plugin],
        [Plugin],
        [Plugin]]
   }
Run this code to check
/*code
var babel = require("@babel/core")
var a = `class abc {

  static name() {

    return 'abc'
  }
}`;
b= babel.transformSync(a, {"presets": ["@babel/preset-env"]});
console.log(b);
*/

# mocha-chai-javascript-testing
