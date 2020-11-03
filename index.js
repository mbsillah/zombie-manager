if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = process.env.PORT || 5000;

const app = express();
server.applyMiddleware({ app });


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(`${__dirname}/client/build`));
  app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`);
  });
}

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen({ port: port }, () => {
      console.log(
        `Server ready at http://localhost:${port}${server.graphqlPath}`
      );
    })
  )
  .catch((err) => {
    console.log(err);
    throw new Error(err);
  });
