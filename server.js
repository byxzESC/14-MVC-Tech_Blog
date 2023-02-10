const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
// routes
const routes = require('./controllers');
// session
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const hbs = exphbs.create();
// helpers
const app = express();
const PORT = process.env.PORT || 3003;

const sess = {
  secret: 'hopefully everything works',
  cookie: {
    // two hours cookie
    // maxAge: 7200,
    // httpOnly: false,
    // secure: false,
    // sameSite: 'strict',
    //session ID, 
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => 
    console.log(`\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`));
});


