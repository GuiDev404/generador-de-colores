import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ContextProvider } from './context/colorsContext';

import Navbar from './components/Navbar';

const ColorSelected = lazy(()=> import('./pages/ColorDetails'));
const ColorsSimple = lazy(()=> import('./pages/ColorsSimple'));
const ColorsDeg = lazy(()=> import('./pages/ColorsDeg'));
const Home = lazy(()=> import('./pages/Home'));

function App() {

  return (
      <Router>
        <Navbar />

        <ContextProvider>
          <Suspense fallback={<div> Cargando... </div>}>
            <Switch>
              <Route path="/color/:id" component={ColorSelected}/>
              <Route path="/colors-simple" component={ColorsSimple} />
              <Route path="/colors-deg" component={ColorsDeg} /> 
              <Route path="/" component={Home} />
            </Switch>
          </Suspense>
        </ContextProvider>
      </Router>
  );
}

export default App;
