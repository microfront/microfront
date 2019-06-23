import { IGraphqlClient } from '@microfront/graphql-client';
export interface ILayout {
    [key: string]: Array<{
        [key: string]: any;
    }>;
}
export interface ILayoutRouter {
    init: (q?: string) => void;
    loadLayout: (q: string) => Promise<any>;
    initRouter: (layout: ILayout) => void;
    renderPageRoute: (pageDefinition: {
        [key: string]: any;
    }) => void;
}
export declare class LayoutRouter implements ILayoutRouter {
    private client;
    constructor(client: IGraphqlClient);
    init(queryString?: string): void;
    loadLayout(queryString: string): Promise<any>;
    initRouter(layout: ILayout): void;
    renderPageRoute(pageDefinition: {
        [key: string]: any;
    }): void;
}
