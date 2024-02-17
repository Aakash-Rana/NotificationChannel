

# Multi-Channel Notification Delivery System

This repository contains the code for a multi-channel notification delivery system implemented in Node.js. It supports sending notifications via push notifications, SMS, and email.

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Demo](#demo)
6. [API Endpoint](#api-endpoint)
7. [Code Structure](#code-structure)
8. [Postman Collection](#postman-collection)
9. [Credits](#credits)
10. [License](#license)


## Features

- Send notifications to multiple channels: Web push , SMS, and email.
- Easily extensible to support additional notification channels.
- Built-in validation checks for input data.
- CORS support for handling cross-origin requests.

## Prerequisites

- Node.js installed on your machine
- Twilio account for sending SMS 
- SMTP server for sending email - MailTrap
- Web push server for sending push notifications

## Installation

1. Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables by creating a `.env` file in the root directory and adding the necessary configuration. Use `.env.example` as a template


## Usage

1. Setup Twilio Account to send SMS
2. Setup MailTrap Account to recieve emails
3. Update ``.env`` file
    ```bash
	TWILIO_ACCOUNT_SID , TWILIO_AUTH_TOKEN , TWILIO_PHONE_NUMBER ,EMAIL_USER , EMAIL_PASSWORD , EMAIL_HOST , EMAIL_PORT
    ```
6. Start the server:

    ```bash
    npm start
    ```
7. Run index.html file and click on ``Enable Notifications`` (acting as client) 

![Button](https://drive.google.com/uc?export=view&id=1ksMATv0TTaRLqqmiRL58cyuHX1UFLw2Z)

8. You will see a ``Service Worker`` running in ``Developer Tools -> Application -> ServiceWorker ``

![Button](https://drive.google.com/uc?export=view&id=14yom44C5eHU905zA6voYEnw5L0cuGHHK)

[ You will find the endpoint , authKey , p256dhKey (subscription details ) logged to the running service ]

9. Use the provided Postman collection to test the API endpoints for sending notifications.

## DEMO
Email

![Email](https://drive.google.com/uc?export=view&id=1MpHbPZ48Xg0vp9Gr7FbGjNHxroekt2fc)

Web-Push Notification

![web-push notification](https://drive.google.com/uc?export=view&id=1V5-FLruiD2MUQpBxU4rQZJqRZLhDojoD)

SMS

![web-push notification](https://drive.google.com/uc?export=view&id=1Vs4Mqg2WzoS__3Ra1clrDMjTWw5uAbpQ)

## API Endpoint

### Send Notification

- **URL**: `/notify`
- **Method**: POST
- **Body**: JSON object with the following fields:
  - `message`: The content of the notification.
  - `channels`: An array of channels to send the notification to (`push`, `sms`, `email`).
  - `targetUsers`: An array of objects containing details of the target users/devices for each channel.


## Code Structure

- `app.js` Main application file handling API requests and routing.
- `pushNotificationService.js`: Service for sending push notifications ( currently sending to the all subscribed clients , but configurable )
- `smsService.js`: Service for sending SMS messages.
- `emailService.js`: Service for sending emails.
- `validation.js`: Module for input validation.

## Postman Collection

You can import the provided Postman collection to test the API endpoints locally.

[Download Postman Collection](https://github.com/Aakash-Rana/NotificationChannel/blob/master/postman_collection.json)

## Credits

- This project uses various libraries and services, including Twilio for SMS, Nodemailer for email, and web-push for push notifications.

## License

This project is licensed under the [MIT License](LICENSE).
