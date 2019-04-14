import React, { Component, lazy, Suspense } from 'react'

const Header = lazy(() => import('./DefaultHeader'));
const Footer = lazy(() => import('./DefaultFooter'));

const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div> 

export default class DefaultLayout extends Component {


  render() {
    return (
      <div className="app">
        <Suspense fallback={loading()}>
            <Header />
        </Suspense>
        <div className="app-body">
            Content
        </div>
        <Suspense fallback={loading()}>
            <Footer />
        </Suspense>
      </div>
    )
  }
}
