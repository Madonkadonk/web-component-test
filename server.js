var app = require('express.io')();

app.http().io();

app.io.route('client_emit', function(req){
    console.log(req.data);
    var date = new Date();
    req.io.emit('server_emit_' + req.data, 'Server Time: ' + date.toLocaleDateString("en-us") + " " +  date.toLocaleTimeString("en-us"));
});

app.use(function(req, res, next) {
    res.sendfile(__dirname + req.path)
});

app.listen(8080);
