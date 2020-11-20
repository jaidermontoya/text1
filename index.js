const express = require("express");
const cors = require("cors");
const users = require('./routes/users');

const app = express();

app.set('port', process.env.PORT || 3001);

app.use(cors({origin: '*'}));
//app.use(cors({origin: 'https://kuepj-3000.sse.codesandbox.io'}));


app.use(express.json());


app.get('/',(req,res)=>{
  res.send('hi');
});

// Routes//
app.use('/api',users);

app.listen(app.get('port'), () => {
  console.log(`running server`);
});