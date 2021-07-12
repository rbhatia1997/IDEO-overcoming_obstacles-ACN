
import React from 'react'

import { Route, Switch } from 'react-router-dom';
import MainNavigation from './components/layouts/MainNavigation'; 

import MainCareerPage from './pages/MainCareer';
import CareerSupportPage from './pages/CareerSupport';
import AppAssistPage from './pages/AppAssist';
import HelpPage from './pages/Help';

// You can wrap the tags around the App component. 

function App() {
  return (
    <div>
    <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <MainCareerPage />
        </Route>
        <Route path='/career-support'>
          <CareerSupportPage />
        </Route>
        <Route path='/app-assist'>
          <AppAssistPage />
        </Route>
        <Route path='/help'>
          <HelpPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;