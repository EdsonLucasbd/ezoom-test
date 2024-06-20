import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const uri = import.meta.env.VITE_GRAPHQL_URI
const token = import.meta.env.VITE_GRAPHQL_TOKEN

export const client = new ApolloClient({
  link: new HttpLink({
    uri: uri,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  cache: new InMemoryCache(),
});
