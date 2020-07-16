
// Protocol http2
const spdy = require("spdy");
const path = require("path");
const port = 3000;
var cors = require("cors");
var express = require("express");
var fs = require("fs");
const youtubedl = require('youtube-dl');
var https = require('https');
var bodyParser = require("body-parser");
var app = express();
var compression = require("compression");
const static = require('node-static');
var file = new (static.Server)('/var/www/html/applications/vue-project/vue-typescript-starter/vue-ts-starter/dist/');
var basePath = '/var/www/html/applications/vue-project/vue-typescript-starter/vue-ts-starter/dist/';

var options = {
  key: fs.readFileSync("/etc/httpd/conf/ssl/maximumroulette.com.key"),
  cert: fs.readFileSync("/etc/httpd/conf/ssl/maximumroulette_com.crt"),
  ca: fs.readFileSync("/etc/httpd/conf/ssl/maximumroulette_com.crt")
};

var httpRtc = require('https').createServer(options, function(request, response) {

    request.addListener('end', function() {

      if (request.url.search(/.slusajsadadzonimenesad|.dzoni/g) != -1) {
        // file.serveFile('bad.html', 402, {}, request, response);
        console.log("OK DZONI");

        const video = youtubedl('http://www.youtube.com/watch?v=90AiXO1pAiA',
        // Optional arguments passed to youtube-dl.
        ['--format=18'],
        // Additional options can be given for calling `child_process.execFile()`.
        { cwd: __dirname })

        // Will be called when the download starts.
        video.on('info', function(info) {
          console.log('Download started')
          console.log('filename: ' + info._filename)
          console.log('size: ' + info.size)
        })

      video.pipe(fs.createWriteStream('myvideo.mp4'))

      }
      //  else {
        console.log("Client looks at request.url ",  request.url);
        file.serve(request, response);
      // }

    }).resume();

  }).listen(3000);
