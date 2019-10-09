module.exports = function multiply(first, second) {
  var result = BigInt(first) * BigInt(second); //use new type date for very big numder//
  return result.toString();
}
console.log(module.exports)