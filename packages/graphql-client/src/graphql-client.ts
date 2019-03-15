import Client, {
  ApolloClient,
  ApolloQueryResult,
  FetchResult,
  MutationOptions,
  ObservableQuery,
  OperationVariables,
  QueryOptions,
  WatchQueryOptions,
} from 'apollo-boost';

export interface IGraphqlClient
  extends Pick<ApolloClient<any>, 'query' | 'watchQuery' | 'mutate'> {}
/**
 * GraphQL client class that wraps a client from a library and handles query/mutation communication.
 */
export class GraphqlClient implements IGraphqlClient {
  private client: ApolloClient<any>;
  constructor(public uri: string) {
    this.client = new Client({
      uri,
    });
  }
  // @todo: eliminate the need to pass in QueryOptions, but allow string and construct options from defaults and transform string with graphql-tag
  public query<T = any, TVariables = OperationVariables>(
    options: QueryOptions<TVariables>
  ): Promise<ApolloQueryResult<T>> {
    return this.client.query(options);
  }
  public watchQuery<T = any, TVariables = OperationVariables>(
    options: WatchQueryOptions<TVariables>
  ): ObservableQuery<T, TVariables> {
    return this.client.watchQuery(options);
  }
  public mutate<T = any, TVariables = OperationVariables>(
    options: MutationOptions<T, TVariables>
  ): Promise<FetchResult<T>> {
    return this.client.mutate(options);
  }
}
