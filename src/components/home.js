import React, { Component } from 'react';

class Home extends Component {
  render() {
    return(
          <div className="home" id="bg_image">
          <center>
              <h1>Publish your passions, your way</h1><br/>
              <h2>Create a unique and beautiful blog.</h2><br/>
              <h3> It’s easy and free.</h3><br/><br/>
              <a href="/Login">CREATE YOUR BLOG</a> 
              </center>
          </div>
    )
  }
}

export default Home;
