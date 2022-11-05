const shopList = (req,res) => {
  res.json(req.query)
}

module.exports = { shopList }