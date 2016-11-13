var page_token = ("EAAIJdgZBdh0wBAHdxOmbqppAA0DI7qNAp0BBbfPOz7mzQABkGyZBMle2ZBPgaaSx76lCsF0iE5qF72Iv5N3TVK44s3wVHTNhcOiKQlOaoZBp9P9mpmX1EnGcfzspQ5TZC5ZBZCPQ81ZBnzbQP9PoFbiEiHg5i6Jgbc0PtLRcjgeKkgZDZD");
var verify_token = ("kameron");
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var http = require('http').Server(app);

//////////////////////////////////////////////////
var Botkit = require('./lib/Botkit.js');
var controller = Botkit.facebookbot({
    debug: false,
    access_token: page_token,
    verify_token: verify_token
});

var bot = controller.spawn({

});

controller.hears(['hello', 'hi'], 'message_received', function(bot, message) {
    bot.reply(message, 'Hello.');
});

// If you wanted your bot to respond to additional "hears" such as Go Heels 
// you could do that below using the same syntax from above.


//added to stop the debug tick remarks in console
controller.on('tick', function(bot, event) {});

controller.setupWebserver(process.env.port || 7000, function(err, webserver) {
    controller.createWebhookEndpoints(webserver, bot, function() {
        console.log('ONLINE!');

    });
});
0
