var page_token = ("EAAQfXvH7ppMBAOc02A4wppsD99q9pI9b2O1CTR3h0JRZA3EzY7Fz2mpV9LW6CGdwB4fSqp1c5N2wCTVIom2povjAFvgruAfljrrSdveShQahDvhU2XbpKd6tFIp7BODnY2myng1ZCOrK2PVDNhpMFX64CdZAzuG10RJzRcfQQZDZD");
var verify_token = ("patpat");
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

controller.hears(['hello', 'hey', 'hi', 'merp', 'wat good'], 'message_received', function(bot, message) {
    bot.reply(message, 'mirecourt');
});

// If you wanted your bot to respond to additional "hears" such as Go Heels 
// you could do that below using the same syntax from above.

controller.hears(['butts'], 'message_received', function(bot, message) {
    bot.reply(message, 'butt butt');
});


//added to stop the debug tick remarks in console
controller.on('tick', function(bot, event) {});

controller.setupWebserver(process.env.port || 5000, function(err, webserver) {
    controller.createWebhookEndpoints(webserver, bot, function() {
        console.log('ONLINE!');

    });
});
