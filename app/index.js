//  REACT MODULES
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//  TRANSLATION
import i18next from './translations/i18n'
//  API CONSUMPTION
import Axios from 'axios'
//Axios.defaults.baseURL = 'https://agpo.cookietogo.site'
Axios.defaults.baseURL = 'http://localhost:4040'
//  PAGES
import HomePage from './pages/Home.page'
import ViewPage from './pages/View.page'
import EditPage from './pages/Edit.page'
import CreatePage from './pages/Create.page'
//  COMPONENTS
import Header from './components/Header.component'
import Flashmessages from './components/FlashMessages.component'
//  CONTEXT
import StateContext from './context/StateContext'
import DispatchContext from './context/DispatchContext'

//    STYLES
import './styles/main.scss'

const App = () => {
  const [flashMessages, setFlashMessages] = useState([])
  const addFlashMessage = msg => {
    setFlashMessages(prev => prev.concat(msg))
  }
  return (
    <StateContext.Provider value={addFlashMessage}>
      <DispatchContext.provider>
        <BrowserRouter>
          <Flashmessages messages={flashMessages} />
          <Header />
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route exact path='/view'>
              <ViewPage />
            </Route>
            <Route exact path='/create'>
              <CreatePage />
            </Route>
            <Route exact path='/application'>
              <EditPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </DispatchContext.provider>
    </StateContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) module.hot.accept()
