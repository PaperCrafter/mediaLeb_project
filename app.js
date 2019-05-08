const express = require('express');
const cookieParesr = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const {sequelize} = require('./models');

const app = express();
//const Server = http.createServer(app);
//socket.io server
const server = require('http').createServer(app);
const io = require('socket.io')(server);

sequelize.sync();

//사용자 측에서 보이는 client page 담당 router
const pageRouter = require('./routes/page');
//아두이노 측에서 사용하는 router
const arduRouter = require('./routes/ardu');


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

app.use('/', pageRouter);

app.use('/ardu', arduRouter);


app.get('/call', (req, res, next)=>{
    try{
        let ipAdd = req.connection.remoteAddress;
        console.log(ipAdd);
        res.send(ipAdd);
        /*

        */
    }catch(err){
        
    }
});



//socketio
io.sockets.on('connection', function (socket){
    //원격에서 접속이 되면 기본 응답
    socket.emit('message_from_server', 'hello, world');
 
 
 
   //메세지가 들어 오면 응답
    socket.on('message_from_client', function (msg){
      console.log('message:', msg);
      /*받은 메세지를 되돌려 줌 
      */
      socket.emit('message_from_server', '"' +msg+ '" 라고하셨군요.');
    });
});

app.use((req, res, next)=>{
    const err= new Error('Not Found');
    err.status = 404;
    next(err);
})

app.use((req, res, next)=>{
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err:{};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'),()=>{
    console.log(app.get('port'), '번 번호에서 대기중');
});