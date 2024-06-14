// import { ApolloClient, InMemoryCache} from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/',
//   cache: new InMemoryCache()
// });

// export default client;
import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from '@apollo/client';
import { createUploadLink } from 'apollo-link-http';

const onlineApiLink = createUploadLink({
  uri: 'https://ellochallenge.onrender.com/',
  credentials: 'same-origin',
});

const localApiLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

const link = ApolloLink.split(
  () => process.env.NODE_ENV === 'production',
  onlineApiLink,
  localApiLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;

// import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// const httpLink = new HttpLink({
//   uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
// });


// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

// export default client;
