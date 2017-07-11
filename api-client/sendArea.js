module.exports = function sendArea(req, res) {
  console.log("hello");
  console.log(req.body);
  res.send(req.body);
}
