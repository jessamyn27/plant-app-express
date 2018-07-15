const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');

const plantControllers = require('./controllers/plantControllers');

app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'));

// every route in plant controller starts with /plantControllers
app.use('/plants', plantControllers);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
