const express = require('express');
const cookieParesr = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const {sequelize} = require('./models');

const arduino = require('./arduino/arduino');

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



const mainRouter = require('./routes/mainRouter');
const adminRouter = require('./routes/adminRouter');
const slaveRouter = require('./routes/slaveRouter');
const InstructionRouter = require('./routes/InstructionRouter');

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

app.use('/', mainRouter);
app.use('/admin', adminRouter);
app.use('/adminSlave', slaveRouter);
app.use('/instruction', InstructionRouter);

console.log(config.port);
const server = app.listen(process.env.PORT || config.port, ()=> {
  let port = process.env.PORT || config.port;
  console.log('Socket server listening at: ' + port);
});

global.io = require('socket.io').listen(server);
/*
const io = require('socket.io')(server);
console.log(io);
console.log(4321);
*/
//module.exports = require('socket.io')(server);



//소켓서버 연결
//io.listen(server);

/*
// NameSpace 1번
const namespace1 = io.of('/master1');
// connection을 받으면, news 이벤트에 hello 객체를 담아 보낸다
namespace1.on('led:off', (socket) => {
  console.log('asdfsadf');
  namespace1.emit('news', { hello: 'Someone connected at namespace1' });
});
// NameSpace 2번
const namespace2 = io.of('/namespace2');
// connection을 받으면, news 이벤트에 hello 객체를 담아 보낸다
namespace2.on('connection', (socket) => {
  namespace2.emit('news', { hello: 'Someone connected at Namespace2' });
});
*/

/*
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
*/