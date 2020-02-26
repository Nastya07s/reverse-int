module.exports = function reverse (n) {
  let result = String(n);
  if(result[0]=='-'){
    return result.split('').reverse().join('').slice(0, -1);
  }
  return result.split('').reverse().join('');
}
