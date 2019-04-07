const express = require('express');
const cookieParesr = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
//const {sequelize} = require('./models');

const app = express();
//sequelize.sync();

const pageRouter = require('./routes/page');



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

app.get('/',pageRouter);

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