var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
//    appId: process.env.MICROSOFT_APP_ID,
//    appPassword: process.env.MICROSOFT_APP_PASSWORD

    appId: '2ada3b5a-69f4-43c6-9ac0-0ddd1c181f63',
    appPassword: '1Vn1uwsvpZqH6oQg4iTBW0V'
});

// Listen for messages from users 
//server.post('/api/messages', connector.listen());
server.post('https://rpabot.azurewebsites.net/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')



// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
    session.send("You said: %s", session.message.text);
});





server.get('/', restify.serveStatic({
 directory: __dirname,
 default: '/index.html'
}));

