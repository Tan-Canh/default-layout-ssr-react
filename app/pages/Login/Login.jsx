import React, { Component } from 'react'
import './login.css'

export default class Login extends Component {
  render() {
    return (
      <div className="container-login">
        <div className="container">
            <div class="row justify-content-center">
                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <div className="card-group">
                      <div className="card p-4">
                        <div className="card-body">
                          <h1 className="card-title">Login</h1>
                          <p className="text-muted">Login with your account</p>
                          <form>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                              </div>
                              <input type="text" className="form-control" placeholder="Username" autoComplete="username" />
                            </div>

                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                              </div>
                              <input type="password" className="form-control" placeholder="Password" autoComplete="password" />
                            </div>
                          </form>
                          
                          <div class="row">
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                              <button type="button" class="btn btn-primary px-4">Login</button>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
                              <button type="submit" class="btn btn-link px-0">Forgot Password?</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card text-white bg-primary text-center py-5">
                        <div className="card-body">
                            <h1 className="card-title">Sign Up</h1>
                            <p>Sign up to dashboard in system</p>
                          <div>
                            <button type="button" className="btn btn-primary active">Sign Up</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    )
  }
}
