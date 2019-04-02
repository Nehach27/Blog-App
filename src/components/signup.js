  import React, { Component } from 'react';
  import axios from 'axios';


  class SignUp extends Component{
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }
      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });
    }
    submituserRegistrationForm(e) {
      e.preventDefault();

      let name = this.state.fields.name
      let email = this.state.fields.email
      let password = this.state.fields.password
      let repeatpassword = this.state.fields.repeatpassword

      this.setState({
        loading:true
      })

      const data={
        name,
        email,
        password,
        repeatpassword
      }
        axios.post('http://localhost:3000/users', data).then((res) => {
          console.log(res)
          
          this.setState({
              loading:false,
              message:res.data
          })
      })
      .catch(err=>{
        console.log(err)
        this.setState({
            loading:false
        })
      })

      if (this.validateForm()) {
        let fields = {};
        fields["name"] = "";
        fields["email"] = "";
        fields["password"] = "";
        fields["repeatpassword"]="";
        this.setState({fields:fields});
        alert("Form submitted. Please login to continue.");
      }
    }
    validateForm() { 
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
      
      if (typeof fields["name"] !== "undefined") {
        if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["name"] = "*Please enter alphabet characters only.";
        }
      }
      
      if (typeof fields["email"] !== "undefined") {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] ="*Please enter valid email-ID.";
        }
      }
      
      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }
      
      if (typeof fields["repeatpassword"] !== "undefined") {
        if (!fields["repeatpassword"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["repeatpassword"] = "*Please enter secure and strong password.";
        }
      }
      
      this.setState({
        errors: errors
      });
      return formIsValid;
    }
      resetForm = () => {
        this.setState({
          ...this.state,
          fields: {},
          errors: {}
        })
      }
    
    render() {
      return (
        <div className="signup">
          <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} style={{border:'1px solid #ccc'}} >
            <div className="signup_container">
              <h2>Sign Up</h2>
              <p>Please fill in this form to create an account.</p>
              <hr/>
              <label for="name"><b>Name</b></label>
              <input className="input" type="text" placeholder="Enter Name" name="name" value={this.state.fields.name} onChange={this.handleChange} required/>
              <div className="errorMsg">{this.state.errors.name}</div>
              
              <label for="email"><b>Email</b></label>
              <input className="input" type="text" placeholder="Enter Email" name="email" value={this.state.fields.emailid} onChange={this.handleChange} required/>
              <div className="errorMsg">{this.state.errors.email}</div>
              
              <label for="password"><b>Password</b></label>
              <input className="input" type="password" placeholder="Enter Password" name="password" value={this.state.fields.password} onChange={this.handleChange} required/>
              <div className="errorMsg">{this.state.errors.password}</div>
              
              <label for="repeatpassword"><b>Repeat Password</b></label>
              <input className="input" type="password" placeholder="Repeat Password" name="repeatpassword" value={this.state.fields.repeatpassword} onChange={this.handleChange} required/>
              <div className="errorMsg">{this.state.errors.repeatpassword}</div>
              
              <label>
              <input type="checkbox" name="remember" /> Remember me
              </label>
              
              <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
              
              <button className="button" type="submit" >Sign Up</button>
            </div>
              
            <div style={{backgroundColor:'rgb(225, 220, 210)'}} >
              <button className="button" type="reset" value="reset" className="cancelbtn" onClick={this.resetForm}>Cancel</button>
            </div>
          </form>
        </div>
        );
      }
  }
    
  export default SignUp;