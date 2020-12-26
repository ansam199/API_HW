const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//write your code 
app.get('/user/:name', (req, res) => {
    const name = req.params.name;
    return res.json({
        message: 'Hello ' + name
       // name: name,
        
    });
});


//Post API Request
app.post('/user', (req, res) => {
  const name = req.body.name;
    if(!name) {
      return res.json({
        success: 'false',
        message: 'name is required'
      });
    }
   return res.json({
     success: 'true',
     message: 'Hello',
     name: name
     
   })
  });


app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});

