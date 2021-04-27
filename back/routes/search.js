const router = require("express").Router();
const axios = require("axios");
const cache = {};

// ruta para buscar por keyword /api/search?q=keyword
router.get("/search", (req, res) => {
  const query = req.query.q;
  if (!cache.hasOwnProperty(query)) {
    axios
      .get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
      .then((response) => {
        cache[query] = response.data.results;
        res.json(response.data.results);
      })
      .catch((err) => console.log(err));
  } else {
    res.json(cache[query]);
  }
});

module.exports = router;
