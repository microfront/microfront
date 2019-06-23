import { ApolloClient, ApolloQueryResult, FetchResult, MutationOptions, ObservableQuery, OperationVariables, QueryOptions, WatchQueryOptions } from 'apollo-boost';
export declare type QueryResult<T> = ApolloQueryResult<T>;
export interface IGraphqlClient extends Pick<ApolloClient<any>, 'query' | 'watchQuery' | 'mutate'> {
}
export declare class GraphqlClient implements IGraphqlClient {
    uri: string;
    private client;
    constructor(uri: string);
    query<T = any, TVariables = OperationVariables>(options: QueryOptions<TVariables>): Promise<ApolloQueryResult<T>>;
    watchQuery<T = any, TVariables = OperationVariables>(options: WatchQueryOptions<TVariables>): ObservableQuery<T, TVariables>;
    mutate<T = any, TVariables = OperationVariables>(options: MutationOptions<T, TVariables>): Promise<FetchResult<T>>;
}
