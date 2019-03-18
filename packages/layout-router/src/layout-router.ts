import { IGraphqlClient } from '@microfront/graphql-client';
import gql from 'graphql-tag';
import page from 'page';

export interface ILayout {
  [key: string]: Array<{ [key: string]: any }>;
}

export interface ILayoutRouter {
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
      regions {
        id
        name
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
  constructor(client: IGraphqlClient, queryString?: string) {
    this.client = client;
    const query = queryString || layoutQueryString;
    this.loadLayout(query).then(layout => this.initRouter(layout.data));
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
    page.show('/');
  }
  public renderPageRoute(pageDefinition: { [key: string]: any }) {
    const pageEl = window.document.createElement('microfront-router-page');
    pageEl.dataset.path = pageDefinition.path;
    window!.document!.querySelector('body')!.innerHTML = '';
    window!.document!.querySelector('body')!.append(pageEl);
  }
}
