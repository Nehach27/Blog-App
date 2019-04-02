import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {

  render() {
    return(
      <div className="login">
        <form style={{border:'1px solid #ccc'}}>
          <h2>Login Form</h2>
            <hr style={{margin:'14px'}}/>
              <div className="imgcontainer">
                <img src={require("../Images/avatar.png")} alt="Avatar" class="avatar"/>
              </div>

              <div className="login_container">
                <label for="uname"><b>Username</b></label>
                <input className="input" type="text" placeholder="Enter Username" name="uname" required/>

                <label for="psw"><b>Password</b></label>
                <input className="input" type="password" placeholder="Enter Password" name="psw" required/>
                    
                <form action="/Blog">
                  <button className="button" type="submit">Login</button>
                </form>
                <label>
                  <input type="checkbox" name="remember"/> Remember me
                </label>
              </div>

              <div style={{backgroundColor:'rgb(225, 220, 210)'}}>
                <button className="button" type="reset" value="reset" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>                
              </div>
          </form>
      </div>

    )
  }
}

export default Login;