const express = require("express");
const mongoose = require('mongoose');
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./schema/schema");
const cors = require('cors');


const app = express();

 app.use(cors());

mongoose.connect('mongodb://localhost/gql-learning', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
    .then(()=> console.log('connection is successful'))
    .catch((err)=>console.log(err))
 
    
app.use('/graphql',
  graphqlHTTP({
    schema,
    graphiql:true
  })
);

app.listen(4000, () => {
  console.log("now listing for requests on port 4000");
});
