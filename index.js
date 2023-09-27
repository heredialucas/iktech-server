import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import schema from './src/schema/index.js';

const { typeDefs, resolvers } = schema;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

const port = Number.parseInt(process.env.PORT) || 4000;

const { url } = await startStandaloneServer(server, {
  listen: { port },
});

// eslint-disable-next-line no-console
console.log(`🚀  Server ready at: ${url}`);
