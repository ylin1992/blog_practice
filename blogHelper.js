const lodashString = require("lodash/string");

exports.isMatchTitle = function(postsArray, title) {
  // the function returns a var {
  // isMatch: boolean
  // content: string
  // }
  // forEach doesnt support return or break statement
  for (let i = 0; i < postsArray.length; i++) {
    let kebabCaseTitle = lodashString.kebabCase(postsArray[i].title);
    if (kebabCaseTitle === lodashString.kebabCase(title)) {
      return {isMatch: true, content: postsArray[i].content, title: kebabCaseTitle};
    }
  }
  return {isMatch: false, content: ""};
}

exports.getKebabCase = function (string) {
  return lodashString.kebabCase(string);
}
