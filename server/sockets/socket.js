const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    // Enviar informacion al Cliente
    client.emit('enviarMensaje', {
        usuario: 'Admininstrador',
        mensaje: 'Bienvenidos a esta aplicación!'
    });

    // Escuchar informacion del cliente
    client.on('disconnect', (client) => {
        console.log('Usuario desconectado');
    });

    // Escuchar informacion del cliente
    client.on('enviarMensaje', (data, callback) => {
        client.broadcast.emit('enviarMensaje', data);
        /* if (data.usuario) {
            callback({
                response: 'Todo salio bien.'
            });
        } else {
            callback({
                response: 'Todo salio mal. Falta Usuario.'
            });
        } */
    });

});