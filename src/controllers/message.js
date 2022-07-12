import * as MessageService from '../services/message.js'

async function message(request, response) {
    const {message, phoneNumber} = request.body; // Mesma coisa que const phoneNumber = request.body.phoneNumber;
    try { 
        const responseMessage = await MessageService.sendMessage(message, phoneNumber);
        response.send(responseMessage);  //response.send(request.body); // O BODY TÁ NO THUNDER CLIENT PARA SER DEFINIDO EM ARQUIVO JSON. É PRECISO DEFINIR ISSO NO INDEX.JS
    } catch(error) {
    response.status(error.status).send(error);
    }
}


function text (request, response) {
    response.send('Exercitando API')
};

export { message, text };