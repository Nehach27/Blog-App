import React, { Component } from 'react';


class SignUp extends Component {
  render() {
    return(
      <div className="signup">
            <form style={{border:'1px solid #ccc'}}>
              <div className="signup_container">
                <h2>Sign Up</h2>
                  <p>Please fill in this form to create an account.</p>
                <hr/>

                <label for="name"><b>Name</b></label>
                <input className="input" type="text" placeholder="Enter Name" name="name" required/>

                <label for="email"><b>Email</b></label>
                <input className="input" type="text" placeholder="Enter Email" name="email" required/>

                <label for="psw"><b>Password</b></label>
                <input className="input" type="password" placeholder="Enter Password" name="psw" required/>

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input className="input" type="password" placeholder="Repeat Password" name="psw-repeat" required/>
                
                <label>
                  <input type="checkbox" name="remember" /> Remember me
                </label>
                
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <form action="/Blog">
                  <button className="button" type="submit" >Sign Up</button>
                </form>
                </div>

                <div style={{backgroundColor:'rgb(225, 220, 210)'}} >
                  <button className="button" type="reset" className="cancelbtn">Cancel</button>
                </div>
            </form>
      </div>
    )
  }
}

export default SignUp;