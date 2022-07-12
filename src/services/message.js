import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_NUMBER;
const twilioClient = twilio(accountSid, authToken); //Aplicação cliente que tá consumindo uma API


function sendMessage(message, phoneNumber){
    return twilioClient.messages.create({
        body: message, 
        from: twilioPhoneNumber,
        to: phoneNumber
    }) //Método para criar o envio de sms, estabelecido pelo twilio e presente na sua documentação
}

export { sendMessage};