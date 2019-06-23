import uuid from 'uuid/v4';

export interface Region {
  id: string;
  name: string;
  style: {
    gridArea: string;
  };
  content: AppComponent[] | Grid;
}

export interface Layout {
  id: string;
  name: string;
  path: string;
  grid: Grid;
}

export interface AppComponent {
  id: string;
  name: string;
  team: string;
  endpoint: string;
}

export interface Grid {
  id: string;
  style: {
    gridTemplateColumns: string;
    gridTemplateRows: string;
    gridTemplateAreas: string;
  };
  content: { [key: string]: Region };
}

const microApps = {
  branding: {
    id: uuid(),
    name: 'branding',
    team: 'team-styleguide',
    endpoint: 'http://localhost:3006'
  },
  searchBar: {
    id: uuid(),
    name: 'search_bar',
    team: 'team-search-recommend',
    endpoint: 'http://localhost:3005'
  },
  navigation: {
    id: uuid(),
    name: 'navigation',
    team: 'team-search-recommend',
    endpoint: 'http://localhost:3005'
  },
  welcome: {
    id: uuid(),
    name: 'welcome',
    team: 'team-advertisement',
    endpoint: 'http://localhost:3001'
  },
  products: {
    id: uuid(),
    name: 'products',
    team: 'team-productt',
    endpoint: 'http://localhost:3004'
  }
} as { [key: string]: AppComponent };

const defaultGrid: Grid = {
  id: uuid(),
  style: {
    gridTemplateColumns: '100px 1fr',
    gridTemplateRows: 'auto',
    gridTemplateAreas: `
    "header header"
    "navigation main"`
  },
  content: {
    header: {
      id: uuid(),
      name: 'header',
      style: {
        gridArea: 'header'
      },
      content: [microApps.branding, microApps.searchBar]
    },
    navigation: {
      id: uuid(),
      name: 'navigation',
      style: {
        gridArea: 'navigation'
      },
      content: [microApps.navigation]
    },
    main: {
      id: uuid(),
      name: 'main',
      style: {
        gridArea: 'main'
      },
      content: [microApps.welcome]
    }
  }
};

export const allLayouts: Layout[] = [
  {
    id: uuid(),
    name: 'home',
    path: '/',
    grid: defaultGrid
  },
  {
    id: uuid(),
    name: 'products',
    path: '/products',
    grid: {
      ...defaultGrid,
      id: uuid(),
      content: {
        ...defaultGrid.content,
        main: {
          id: uuid(),
          name: 'main',
          style: {
            gridArea: 'main'
          },
          content: [microApps.products]
        }
      }
    }
  }
];

export const getLayout = (path: string): Promise<Layout | undefined> => {
  return Promise.resolve(allLayouts.find(layout => layout.path === path));
};
