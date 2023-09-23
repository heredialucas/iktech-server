import { Products } from '../../database/zapato.js';

export const resolvers = {
  Query: {
    products: () => Products,
  },
};
