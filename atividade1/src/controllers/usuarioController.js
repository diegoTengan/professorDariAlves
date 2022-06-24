const home = (request, response)=> {
    return response.render('index');
};


const usuario = (request, response)=> {
    return response.render('usuarios');
};

module.exports = {
    home,
    usuario,
}