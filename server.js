const express = require('express');
const fs = require('fs-extra');
const ejs = require('ejs');



const pageRouter = require('./src/routes/pageRouter.js');
const apiRouter = require('./src/routes/apiRouter.js');

const connectToDb = require('./src/database/dbConnect.js');
const dbConfigObj = require('./knexfile.js');

const app = express();

let dbConnectionConfig

if( process.env.NODE_ENV === 'production' ){
  dbConnectionConfig = dbConfigObj.production
} else {
  dbConnectionConfig = dbConfigObj.development
}

const appDb = connectToDb(dbConnectionConfig);
app.locals.db = appDb;

// Configuración del Motor de la plantillas EJS
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/src/views`);

//Aqui van mis vistas estáticas
app.use(express.static(`${__dirname}/public`))


app.use('/', pageRouter);
app.use('/api/v1', apiRouter);
app.use((req, res) => {
  res.send('<h1>Error 404. Page not found</h1>');
})




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`App listening on port ${PORT}`);
});
