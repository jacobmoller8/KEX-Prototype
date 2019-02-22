import React, { Component } from 'react'
import './LogIn.css';
import { Link } from 'react-router-dom'


export const LogIn = props => (

  <div>
    <div className="row justify-content-center" >
      <div className="col-md-4 col-sm-10 text-center">

        <div id="signInContainer">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Username:</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="JohnnyCool"></input>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password:</label>
              <input type="password" className="form-control" id="InputPassword" placeholder="*******"></input>
            </div>

            <button onClick={(e) => props.onClick(e, "hejhopp", "snopp")} type="submit" className="btn btn-warning">Sign In</button>

          </form>
        </div>

        <p id="registerText">Haven't got an account?</p>
        <button type="submit" className="btn btn-warning">Register</button>

      </div>


    </div>
  </div>
)
