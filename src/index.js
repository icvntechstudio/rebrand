import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import App from './App';
import Privacy from './Privacy'
import Terms from './Terms'
import reportWebVitals from './reportWebVitals';
import { GraphQLClient, ClientContext } from 'graphql-hooks'

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    "Authorization": (process.env.REACT_APP_DATO_API_TOKEN)
  }
})

ReactDOM.render(
  <BrowserRouter>
    <ClientContext.Provider value={client}>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
      <Route exact path="/terms">
          <Terms />
        </Route>
        <Route exact path="/privacy">
          <Privacy />
        </Route>
    </ClientContext.Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
