import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content,Footer,FooterSection } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>

        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">BlogApp</Link>} scroll>
            <Navigation>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </Navigation>
        </Header>

        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">BlogApp</Link>}>
            <Navigation>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </Navigation>
        </Drawer>

        <Content >
            <div className="page-content" />
            <Main/>
        </Content>

        <Footer>
            <FooterSection type="bottom">
                <center>
                    <p>This is a Blog &copy; copyright 2019.</p>
                </center>
            </FooterSection>
        </Footer>
    </Layout>


</div>

    );
  }
}

export default App;
