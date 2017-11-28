const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
var session = require('express-session');
var cookieParser = require('cookie-parser');


// API file for interacting with MongoDB
// const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(cookieParser());

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
// app.use('/api', api);

// Send all other requests to the Angular app
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

//Set up static files
app.use(express.static('dist'));

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));

/////////////////////////////////EXPRESS APP ABOVE/////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////SESSIONS BELOW////////////////////////////////////

  
//Sessions
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs', //Change this and move it to the secrets file
    resave: false,
    saveUninitialized: false,
    cookie: {
    expires: 600000
    }
}));
        
// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');        
    }
    next();
});
        
// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.status(200).json("Already logged in; TODO: redirect to dashboard"); //TODO: Redirect to dashboard
    } else {
        next();
    }    
};

/////////////////////////////////SESSIONS ABOVE////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////USER MODEL BELOW/////////////////////////////////


var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');

// create a sequelize instance with our local postgres database information.
var sequelize = new Sequelize('postgres://postgres@localhost:5432/firstImpression');

// setup User model and its fields.
var User = sequelize.define('users', {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    }
});

User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password,this.password)  
  }

// create all the defined tables in the specified database.
sequelize.sync()
    .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

// export User model for use in other files.
// module.exports = User;




/////////////////////////////////USER MODEL ABOVE/////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////AUTH ROUTES BELOW/////////////////////////////////

app.post('/login', sessionChecker, (req, res) => {
    var username = req.body.username,
    password = req.body.password;
    User.findOne({ where: { username: username } }).then(function (user) {
        if (!user) {
            res.status(200).json("Can't find that user");
        } else if (!user.validPassword(password)) {
            res.status(200).json("Password is not valid");
        } else {
            req.session.user = user.dataValues;
            res.status(200).json("You've reached the dashboard page");
        }
    });
});

app.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid');
        res.status(200).send("You've been logged out");
    } else {
        res.status(200).send("You've reached the login page");
    }
});

app.post('/createUser', (req, res, next) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }) 
    .then(user => {
        req.session.user = user.dataValues;
        res.status(200).json("You have successfully created a new account!");
    })
    .catch(error => {
        res.status(401).json("There was an unexpected error");
    });
})


    //User signup
    // createUser: (req, res, next) => {
    //     User.create({
    //         username: req.body.username,
    //         email: req.body.email,
    //         password: req.body.password
    //     })
    //     .then(user => {
    //         req.session.user = user.dataValues;
    //         res.status(200).json("You have successfully created a new account!");
    //     })
    //     .catch(error => {
    //         res.status(200).json("Bro, you already have an account. Please Log in!");
    //     });
    // },



/////////////////////////////////AUTH ROUTES ABOVE/////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////DATABASE CONFIG BELOW/////////////////////////////


var Sequelize = require('sequelize');
// var secrets = require('./secrets');
var sequelize = new Sequelize('postgres://postgres@localhost:5432/firstImpression', {
    operatorsAliases: false
});

// module.exports.database = sequelize;

/////////////////////////////////DATABASE CONFIG ABOVE/////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////SECRETS BELOW//////////////////////////////////


// module.exports = {
//     databaseConfig: 'postgres://postgres@localhost:5432/firstImpression' //Put db configuration here
// };


////////////////////////////////////SECRETS ABOVE//////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
