/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str =  x.toString() .split("") .reverse() .join("");
    let a = str==x
    return a ;
};