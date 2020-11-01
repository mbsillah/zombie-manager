require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;

const resolvers = {
  Query: {
    sayHi: () => 'Hello World!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = 5000;

mongoose
  .connect(process.env.MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected!')
    return server.listen({ port: port });
  })
  .then(() => console.log(`Server running on port ${port}`));
