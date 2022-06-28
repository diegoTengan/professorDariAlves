const {Api, Nomes} = require('../models/Api');
const home = (request, response)=> {
    return response.render('index');
};


const usuario = (request, response)=> {
    return response.render('usuarios',{Api, Nomes});
};

const descricao = (request, response) => {
    const{id}= request.params
    return response.send(id)
}

module.exports = {
    home,
    usuario,
    descricao,
}