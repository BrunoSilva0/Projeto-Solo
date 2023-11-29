var express = require("express");
var router = express.Router();

var clickerController = require("../controllers/clickerController") 

router.post("/buscarClicker", function (req, res) {
    console.log("ENTREI NA ROTA /buscarClicker")
    clickerController.buscarClicker(req, res);
})

router.post("/buscarMedia", function(req, res) {
    console.log("ENTREI NA ROTA /buscarMediaClicker")
    clickerController.buscarMedia(req, res);
})

module.exports = router;