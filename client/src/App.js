import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { ApolloProvider } from "@apollo/react-hooks";
//import ApolloClient from "apollo-boost";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  //createHttpLink,
} from '@apollo/client'

//import { setContext } from '@apollo/client/link/context'

import SearchBooks from './pages/SearchBooks'
import SavedBooks from './pages/SavedBooks'
import Navbar from './components/Navbar'
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})

// const link = createHttpLink({
//   uri: '/graphql',
// })
// const auth = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token')
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   }
// })
// const client = new ApolloClient({
//   link: auth.concat(link),
//   cache: new InMemoryCache(),
// })

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={SearchBooks} />
            <Route exact path="/saved" component={SavedBooks} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  )
}

export default App
