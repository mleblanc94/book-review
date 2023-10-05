const express = require('express');
const session = require('session');
const controllers = require('./controllers');

const sequelize = require('./config/connection');
const sequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new sequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})