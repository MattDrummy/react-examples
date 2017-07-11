module.exports = function sendCalculate(req, res) {
  // var result = 0
  console.log(req.method);
  var x = parseFloat(req.query.x)
  var y = parseFloat(req.query.y)
  var op = operation(req.query.operation);
  if (!op || !x || !y) {
    res.send(400);
  } else {
    res.send(`${eval(x + op + y)}`);
  }
}

function operation(op) {
  switch (op) {
    case 'add':
      return '+';
      break;
    case 'subtract':
      return '-';
      break;
    case 'divide':
      return '/';
      break;
    case 'multiply':
      return '*';
      break;
    default:
  }
  return;
}
