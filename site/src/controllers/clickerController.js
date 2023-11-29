var clickerModel = require("../models/clickerModel")

function buscarClicker(req, res) {
    var fkUsuario = req.body.idUsuario;

    clickerModel.buscarClicker(fkUsuario)
    .then(
        function (resultadoBusca) {
            if (resultadoBusca.length == 1) {
                res.json(resultadoBusca[0])
            } else {
                res.status(100).send("Sem resultados.")
            }
        }).catch(
            function (erroBuscar) {
                console.log(erroBuscar.sqlMessage)
                res.status(500).send("Erro ao se comunicar ao servidor")
            }
        )
}

function buscarMedia(req, res) {
    var campo = req.body.mediaPontos

    clickerModel.buscarMedia(campo)
    .then(
        function (resultadoBusca) {
            if (resultadoBusca.length == 1) {
                res.json(resultadoBusca[0])
            } else {
                res.status(100).send("Sem resultados.")
            }
        }).catch(
            function (erroBuscar) {
                console.log(erroBuscar.sqlMessage)
                res.status(500).send("Erro ao se comunicar ao servidor")
            }
        )
}

module.exports = {
    buscarClicker,
    buscarMedia
}