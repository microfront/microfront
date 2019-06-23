import { IGraphqlClient } from '@microfront/graphql-client';
import gql from 'graphql-tag';
import page from 'page';

export interface ILayout {
  [key: string]: Array<{ [key: string]: any }>;
}

export interface ILayoutRouter {
  init: (q?: string) => void;
  loadLayout: (q: string) => Promise<any>;
  initRouter: (layout: ILayout) => void;
  renderPageRoute: (pageDefinition: { [key: string]: any }) => void;
}

const layoutQueryString = `
query {
  allLayouts {
    name
    path
    grid {
      id
      style
      regions {
        id
        name
        style
        content {
          id
          name
          team
          endpoint
        }
      }
    }
  }
}
`;

export class LayoutRouter implements ILayoutRouter {
  private client: IGraphqlClient;
  constructor(client: IGraphqlClient) {
    this.client = client;
  }
  public init(queryString?: string) {
    const query = queryString || layoutQueryString;
    this.loadLayout(query).then(layout => this.initRouter(layout));
  }
  public async loadLayout(queryString: string) {
    const result = await this.client.query({
      query: gql`
        ${queryString}
      `,
    });
    // tslint:disable no-console
    console.log(result);
    return result.data;
  }
  public initRouter(layout: ILayout) {
    layout.allLayouts.forEach((pageDefinition: { [key: string]: any }) => {
      page(pageDefinition.path, () => this.renderPageRoute(pageDefinition));
    });
    page();
  }
  public renderPageRoute(pageDefinition: { [key: string]: any }) {
    const pageEl = document.createElement('microfront-router-page');
    pageEl.dataset.path = pageDefinition.path;
    document!.querySelector('#root')!.innerHTML = '';
    document!.querySelector('#root')!.append(pageEl);
  }
}
