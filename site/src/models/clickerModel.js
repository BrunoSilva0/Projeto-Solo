var database = require("../database/config")

function buscarClicker(fkUsuario) {
    console.log("ACESSEI O CLICKER MODEL MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarClicker(): ", fkUsuario);
    var instrucao = `
    SELECT MAX(pontos) as pontos FROM Clicker WHERE fk_idUsuario = ${fkUsuario};
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarMedia(campo) {
    console.log("ACESSEI O CLICKER MODEL MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedia(): ");
    var instrucao = `
    SELECT ROUND(AVG(${campo})) as media FROM Clicker;
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarClicker,
    buscarMedia
}