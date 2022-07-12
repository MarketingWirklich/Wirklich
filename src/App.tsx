import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router";

import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'

function App() {


  

  return (
    
    <ApolloProvider client={client}>
    <BrowserRouter>
      <Router />

    </BrowserRouter>
    </ApolloProvider>
 
  )
}

export default App

