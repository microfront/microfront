import { objectType, stringArg } from 'nexus';
import { getLayout, allLayouts } from '../data';
import { Layout } from './layout';

const layoutArgs = {
  path: stringArg({
    required: true,
    description: 'path of the layout'
  })
};

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.field('layout', {
      type: Layout,
      args: layoutArgs,
      resolve: (_, { path }) => getLayout(path)
    });
    t.list.field('allLayouts', {
      type: Layout,
      resolve(root, args, ctx) {
        return allLayouts;
      }
    });
  }
});
