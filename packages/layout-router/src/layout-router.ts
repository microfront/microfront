import { IGraphqlClient } from '@microfront/graphql-client';
import gql from 'graphql-tag';

export interface ILayout {
  [key: string]: string;
}

export interface ILayoutRouter {
  loadLayout: () => Promise<any>;
}

export class LayoutRouter implements ILayoutRouter {
  private client: IGraphqlClient;
  // @ts-ignore
  private layout: ILayout;
  constructor(client: IGraphqlClient) {
    this.client = client;
    this.loadLayout().then(layout => (this.layout = layout));
  }
  public async loadLayout() {
    const result = await this.client.query({
      query: gql`hello(name: "freak")`,
    });
    // tslint:disable no-console
    console.log(result);
    return {
      foo: 'bar',
    };
  }
}
