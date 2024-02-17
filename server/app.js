require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors")
const bodyParser = require('body-parser');
const pushNotificationService = require('./pushNotificationService');
const smsService = require('./smsService');
const emailService = require('./emailService');
const { validateNotificationRequest } = require('./validation');

app.use(bodyParser.json());


app.use(cors());

app.post('/notify', async (req, res) => {
    try {
        validateNotificationRequest(req.body);

        const { message, channels, targetUsers } = req.body;

        switch (channels) {
            case 'all':
                await pushNotificationService.sendPush(message, targetUsers);
                await smsService.sendSMS(message, targetUsers);
                await emailService.sendEmail(message, targetUsers);
                break;
            case 'push':
                await pushNotificationService.sendPush(message, targetUsers);
                break;
            case 'sms':
                await smsService.sendSMS(message, targetUsers);
                break;
            case 'email':
                await emailService.sendEmail(message, targetUsers);
                break;
            default:
                throw new Error('Invalid channels specified');
        }

        res.json({ success: true });
    } catch (error) {
        console.error('Error sending notification:', error);
        res.status(400).json({ success: false, error: error.message });
    }
});

app.post("/save-subscription", (req, res) => {
    pushNotificationService.insertPushSubscription(req.body);
    console.log(req.body)
    res.json({ status: "Success", message: "Subscription saved!" })
})


app.listen(3000, () => {
    console.log('Notification server listening on port 3000');
});
