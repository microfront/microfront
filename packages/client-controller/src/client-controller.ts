import { GraphqlClient, IGraphqlClient } from '@microfront/graphql-client';
import { ILayoutRouter, LayoutRouter } from '@microfront/layout-router';
// import * as dotenv from 'dotenv';

// dotenv.config();

const apiGatewayUri = process.env.API_GATEWAY_URI || 'http://localhost:4000';

export class ClientController {
  public graphqlClient: IGraphqlClient;
  public router: ILayoutRouter;
  constructor() {
    this.graphqlClient = new GraphqlClient(apiGatewayUri);
    this.router = new LayoutRouter(this.graphqlClient);
  }
  public init() {
    this.router.init();
  }
}
