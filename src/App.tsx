import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router";

import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'
import { MenuContext, useDrawerContext } from "./Contexts/MainContext";

function App() {

  

  return (
    
    <ApolloProvider client={client}>
    
    <BrowserRouter>
    <MenuContext>
    <Router />

    </MenuContext>
    </BrowserRouter>
    </ApolloProvider>
 
  )
}

export default App

