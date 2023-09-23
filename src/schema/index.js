import products from './products/index.js';

const { productsTypeDefs, productsResolvers } = products;

const typeDefs = `
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export default {
  resolvers: [...productsResolvers],
  typeDefs: [typeDefs, ...productsTypeDefs],
};
