const app = require('app');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
app.listen(PORT, function(){
    console.log('Escuchando a los gatos en:',PORT);
  });