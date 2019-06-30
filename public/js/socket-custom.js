let socket = io();

// Escuchar informacion del Servidor
socket.on("connect", function () {
    console.log("Conectado al Servidor!");
});
// Escuchar informacion del Servidor
socket.on("disconnect", function () {
    console.log("Perdimos conexión con el Servidor!");
});

// Enviar informacion al Servidor
socket.emit("enviarMensaje", {
    usuario: "Gustavo",
    mensaje: "Hola todo el mundo!"
}, (response) => {
    console.log('Respuesta del Servidor: ', response)
});

// Escuchar informacion del Servidor
socket.on("enviarMensaje", mensaje => {
    console.log(mensaje);
});