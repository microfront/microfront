import { objectType } from 'nexus';

import { Grid as IGrid, Layout as ILayout } from '../data';

export const Layout = objectType({
  name: 'Layout',
  description: 'A layout associated with a path.',
  definition(t) {
    t.string('id', { description: 'The id of the layout' });
    t.string('name', { description: 'The name of the layout' });
    t.string('path', {
      nullable: false,
      description: 'The path this layout is associated with.'
    });
    t.field('grid', {
      type: Grid,
      resolve(root: any, args, ctx) {
        return root.grid;
      }
    });
  }
});

export const Grid = objectType({
  name: 'Grid',
  description: 'A grid as a member of a layout',
  definition(t) {
    t.string('id', { description: 'The id of the grid' });
    t.string('style', {
      description: 'The style of the grid',
      resolve(root: any) {
        return JSON.stringify(root.style);
      }
    });
    t.list.field('regions', {
      type: Region,
      description: 'the regions in the grid',
      resolve(root: any, args, ctx) {
        const regions = Object.keys(root.content).map(key => root.content[key]);
        return regions;
      }
    });
  }
});

export const Region = objectType({
  name: 'Region',
  description: 'A grid as a member of a layout',
  definition(t) {
    t.string('id', { description: 'The id of the region' });
    t.string('name', { description: 'The name of the region' });
    t.string('style', {
      description: 'The style of the region',
      resolve(root: any) {
        return JSON.stringify(root.style);
      }
    });
    t.list.field('content', { type: AppComponent });
  }
});

export const AppComponent = objectType({
  name: 'AppComponent',
  description: 'A (micro) app or component',
  definition(t) {
    t.string('id', { description: 'The id of the app/component' });
    t.string('name', { description: 'The name of the app/component' });
    t.string('team', { description: 'The team of the app/component' });
    t.string('endpoint', { description: 'The endpoint of the app/component' });
  }
});
