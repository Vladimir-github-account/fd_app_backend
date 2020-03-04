const express = require( 'express' );
const router = require( './routers' );
import cors          from 'cors';
import errorHandlers from './middlewares/errors_handlers';

const PORT = 5000;
const app = express();
app.use( cors() );
app.use( express.json() );
app.use( '/api', router );
app.use( errorHandlers.applicationErrorHandler );
app.use( errorHandlers.validationErrorHandler );
app.use( errorHandlers.sequelizeErrorHandler );
app.use( (err, req, res, next) => {
  console.log( res );
  return res.status( 500 ).send( `Server error ${err}` );
} );

app.listen( PORT, () => {
  console.log( `My app listening on port ${PORT}` );
} );