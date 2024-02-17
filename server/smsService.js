const Twilio = require('twilio');

// Configure Twilio for sending SMS
const twilioClient = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

module.exports = {
    async sendSMS(message, targetUsers) {
        await Promise.all(targetUsers.map(user => twilioClient.messages.create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: user.phoneNumber,
        })));
    }
};
