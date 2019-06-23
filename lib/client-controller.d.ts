import { IGraphqlClient } from '@microfront/graphql-client';
import { ILayoutRouter } from '@microfront/layout-router';
export declare class ClientController {
    graphqlClient: IGraphqlClient;
    router: ILayoutRouter;
    constructor();
    init(): void;
}
