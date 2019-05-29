const express = require('express');
const cookieParesr = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const {sequelize} = require('./models');

const arduino = require('./arduino');

const config = require('./config');

var VirtualSerialPort = require('udp-serial').SerialPort;
var firmata = require('firmata');
var five = require("johnny-five");

const app = express();
//const Server = http.createServer(app);
//socket.io server
//const server = require('http').createServer(app);
//const io = require('socket.io')(server);

sequelize.sync();

const pageRouter = require('./routes/pageRouter');
const adminRouter = require('./routes/adminRouter');

//미들웨어 연결
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 8001);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParesr('project_secret'))
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:'project_secret',
    cookie:{
        httpOnly:true,
        secure:false,
    }
}));

app.use(flash());

console.log(config.port);
const server = app.listen(process.env.PORT || config.port, ()=> {
  let port = process.env.PORT || config.port;
  console.log('Socket server listening at: ' + port);
});


app.use('/', pageRouter);
app.use('/admin', adminRouter);


const io = require('socket.io')(server);


let ardu1;
//아두이노 모듈 불러오기

ardu1 = new arduino('192.168.43.50');
ardu1.connect();

io.of('/arduino').on('connection', (socket) => {

  console.log('New connection: ' + socket.id);

  socket.on('led:on', function() {
    socket.broadcast.emit('led:on');
    console.log('Broadcasting: led:on');
  });

  socket.on('led:off', function() {
    socket.broadcast.emit('led:off');
    console.log('Broadcasting: led:off');
  });

});

