import { makeSchema } from 'nexus';
import * as allTypes from './graphql';
export const schema = makeSchema({
  types: allTypes,
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/typings.ts'
  }
});
