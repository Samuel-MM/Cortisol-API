module.exports = {

  getData: function (req, res) {
    console.log('chegou');
    res.status(200).json({
      error: false,
      code: 200,
      data: "Teste"
    });
  },

  postData: function (req, res) {

    const { teste } = req.body;
    console.log(req.body, teste);

    res.status(200).json({
      error: false,
      code: 200,
      data: teste
    });
  }
};
