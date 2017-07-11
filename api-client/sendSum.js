module.exports = function sendSum(req, res) {
  console.log(req.method);
  var sum = 0;
  var array = req.query.n
  var result = ""
  for (var i = 0; i < array.length; i++) {
    sum += parseFloat(array[i]);
  }
  result = array.join(' + ')
  result += ` = ${sum}`;
  res.send(`${result}`)
}
