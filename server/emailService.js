const nodemailer = require('nodemailer');

// Configure nodemailer for sending emails
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

module.exports = {
    async sendEmail(message, targetUsers) {
        const mailOptions = {
            from: 'Aakash Rana <aakash@developer.com>',
            to: targetUsers.map(user => user.email).join(', '),
            subject: 'Notification',
            text: message,
        };
        await transporter.sendMail(mailOptions);
    }
};
