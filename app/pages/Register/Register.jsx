import React, { Component } from 'react'
import './register.css'

export default class Register extends Component {
  render() {
    return (
      <div className="container-register">
        <div className="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-7 col-xl-6">
                    <div className="card mx-4">
                        <div className="card-body">
                            <form>
                               <h1>Register</h1>
                               <p className="text-muted">Create your account</p>
                               <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <span><i className="fas fa-user"></i></span>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Username" autoComplete="username" />
                               </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <span><i class="fas fa-envelope"></i></span>
                                        </div>
                                    </div>
                                    <input type="email" className="form-control" placeholder="Email" autoComplete="email" />
                                </div>

                               <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <span><i className="fas fa-key"></i></span>
                                    </div>
                                </div>
                                <input type="password" className="form-control" placeholder="Password" autoComplete="password" />
                               </div>

                               <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <span><i className="fas fa-key"></i></span>
                                    </div>
                                </div>
                                <input type="password" className="form-control" placeholder="Repeat password" autoComplete="repeat password" />
                               </div>

                               <button type="submit" className="btn btn-success block form-control">Create Account</button>
                            </form>
                        </div>
                        <div className="card-footer p-4">
                            
                            <div class="row">
                                <div class="col-xs-12 col-sm-6">
                                    <a href="https://facebook.com/" class="btn btn-facebook mb-1 block form-control"><span><i class="fab fa-facebook-f pr-1"></i>Facebook</span></a>
                                </div>
                                <div class="col-xs-12 col-sm-6">
                                    <a href="https://twitter.com/" class="btn btn-twitter mb-1 block form-control"><span><i class="fab fa-twitter pr-1"></i>Twitter</span></a>
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
