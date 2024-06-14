// import { ApolloClient, InMemoryCache} from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/',
//   cache: new InMemoryCache()
// });

// export default client;

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});


const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
