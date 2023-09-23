import { resolvers } from './resolvers.js';
import models from './models.js';
import queries from './queries.js';

export default {
  productsTypeDefs: [queries, models],
  productsResolvers: [resolvers],
};
