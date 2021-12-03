import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Layout from '@shared/components/Layout';
import Error from '@pages/Error';
import Home from '@pages/Home';
import Map from '@pages/Map';
import Train from '@pages/Train';

interface AppProps {}

const App = ({}: AppProps) => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/train" exact>
            <Train />
          </Route>
          <Route path="/map" exact>
            <Map />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="/**">
            <Redirect to="/" />
          </Route>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
