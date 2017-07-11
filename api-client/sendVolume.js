module.exports = function sendVolume(req, res, next) {
  console.log(req.method);
  var array = [];
  var sum = 1;
  for (var variable in req.params) {
    array.push(req.params[variable]);
  }

  for (var i = 0; i < array.length; i++) {
    sum *= parseFloat(array[i]);
  }
  res.send(`The volume of a ${array.join('x')} is ${sum}`)
  next();
}
