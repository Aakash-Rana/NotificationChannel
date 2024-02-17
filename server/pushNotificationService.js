const webpush = require('web-push');
const subDatabase = [];

const apiKeys = {
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY
}

webpush.setVapidDetails(
    'mailto:test@example.com',
    apiKeys.publicKey,
    apiKeys.privateKey
)

// Configure web push notifications
webpush.setVapidDetails('mailto:test@test.com', process.env.PUBLIC_KEY, process.env.PRIVATE_KEY);

const sendPush = async (message, targetUsers) => {
    // In case of database and different users
    let pushSubscriptions = targetUsers.map(user => getUserPushSubscription(user));

    // pushing to all clients right now
    pushSubscriptions = subDatabase;
    await Promise.all(pushSubscriptions.map(subscription => webpush.sendNotification(subscription, message)));
}

const insertPushSubscription = subscription => subDatabase.push(subscription);

module.exports = {
    sendPush, insertPushSubscription
};

function getUserPushSubscription(user) {
    // Retrieve user's push subscription details, for example from a database
    return {
        endpoint: user.endpoint,
        keys: {
            auth: user.authKey,
            p256dh: user.p256dhKey,
        },
    };
}
