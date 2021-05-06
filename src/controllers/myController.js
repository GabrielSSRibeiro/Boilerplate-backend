module.exports = {
  index(req, res) {
    return res.json("myGet");
  },

  store(req, res) {
    return res.json(req.body.myBody);
  },
};
