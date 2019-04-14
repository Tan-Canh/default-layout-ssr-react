import React, { Component } from 'react'
import { HashRouter, Route, Switch, BrowserRouter as Router } from 'react-router-dom'

const loading = () => <div >Loading...</div>;

const Login         = React.lazy(() => import('./pages/Login/Login'));
const Register      = React.lazy(() => import('./pages/Register/Register'));
const Page404       = React.lazy(() => import('./pages/Page404/Page404'));
const Page500       = React.lazy(() => import('./pages/Page500/Page500'));

const DefaultLayout = React.lazy(() => import('./layouts/DefaultLayout'));


export default class App extends Component {

  render() {
    return (
      <div>
       <HashRouter>
         <React.Suspense fallback={loading()}>
          <Switch>
            <Route path='/login'      name='Login Page'     render={ props => <Login {...props} />} />
            <Route path='/register'   name='Register Page'  render={ props => <Register {...props} />} />
            <Route path='/404'        name='Page 404'       render={ props => <Page404 {...props} />} />
            <Route path='/500'        name='Page 500'       render={ props => <Page500 {...props} />} />
            <Route path='/'           name='Home'           render={ props => <DefaultLayout {...props} />} />
          </Switch>
         </React.Suspense>
       </HashRouter>
      </div>
    )
  }
}
