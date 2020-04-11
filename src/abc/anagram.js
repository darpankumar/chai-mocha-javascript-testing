export const checkIsAnagram = function (str1, str2) {

  const env = process.env.NODE_ENV;
  if(str1 === str2) {

    return true;
  } else {

    str1 = (str1 || '').toLowerCase();
    str2 = (str2 || '').toLowerCase();
    let obj1 = getObjectOutOfString(str1)
    let obj2 = getObjectOutOfString(str2)
    const object1Keys = Object.keys(obj1);
    const object2Keys = Object.keys(obj2);
    if (object1Keys.length === object2Keys.length) {

      return object1Keys.every((data)=> {

        return obj2[data] === obj1[data]
      });
    } else {
      return false;
    }
  }
}

function getObjectOutOfString(inputString) {

let outPutObject = {};
   inputString = inputString.trim();
  for(let i=0; i<inputString.length; i++) {
    const eachCharacter = inputString[i];
    if(outPutObject[eachCharacter]){
      outPutObject[eachCharacter]++;
    } else {
      outPutObject[eachCharacter] = 1
    }
   }
   return outPutObject;
}

// var babel = require("@babel/core")
// var a = `class abc {

//   static name() {

//     return 'abc'
//   }
// }`;
// b= babel.transformSync(a, {"presets": ["@babel/preset-env"]});
// b.options.plugins.forEach(data=>console.log(data));
