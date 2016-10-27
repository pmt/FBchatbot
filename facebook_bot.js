var page_token = ("EAAFDdMjV31ABAD5rLLHgG1l8myCWC4Obqp9mR5jyQkZAFILdhCKa4QY5IYaisoHUD2ftGR9miifN9DCQiH7ZAePsdDV2ZAtZBZBV4SJzKmkGSwSRpAFquTvZA84d3FiDBcTO9SlenK2w1D42c1HvBTop97dthsIxYdEdjPYJTKlgZDZD");
var verify_token = ("DukeBot");
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

//added to stop the debug tick remarks in console
controller.on('tick', function(bot, event) {});

controller.setupWebserver(process.env.port || 5000, function(err, webserver) {
    controller.createWebhookEndpoints(webserver, bot, function() {
        console.log('ONLINE!');

    });
});
