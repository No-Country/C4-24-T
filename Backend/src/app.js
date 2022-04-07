const express = require('express');
const methodOverride = require('method-override');
const app = express();
// const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.hander');


const port = process.env.PORT || 3000;

app.use(express.json());

// const whitelist = ['http://127.0.0.1:5500','https://myapp.co','http://localhost:3001','http://localhost:3000']
// const options = {
//   origin: (origin, callback) => {
//     // || !origin para poder hacer req desde el mismo origen
//     if (whitelist.includes(origin) || !origin)  {
//       callback( null, true);
//     } else {
//       callback(newError ('No tiene permiso para acceder'));
//     }
//   }
// }

// app.use(cors(options));
app.use(express.static("./public"));
// //URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
// app.use(express.urlencoded({ extended: false }));
// //Middleware de aplicación el cual se encargue de controlar la posibilidad de usar otros métodos diferentes al GET y al POST, en nuestros formularios
// app.use(methodOverride('_method'));

app.get('/', (req, res) =>{
  res.send('Welcome')
})

routerApi(app)
// despues del puting de la routerApi
//importante revisar el orden de ejecucion
 app.use(logErrors)
 app.use(boomErrorHandler)
 app.use(errorHandler)

app.listen(port,() => {
  console.log('listening on port '+ port)
  })
