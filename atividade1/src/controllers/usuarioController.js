const Api = require('../models/Api');
const home = (request, response)=> {
    return response.render('index');
};


const usuario = (request, response)=> {
    //const nomes = ['Bryan', 'Jordan', 'Kevin'];
    return response.render('usuarios', {Api});
};

module.exports = {
    home,
    usuario,
}