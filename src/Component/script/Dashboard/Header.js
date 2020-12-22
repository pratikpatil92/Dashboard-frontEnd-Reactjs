import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserTimes} from '@fortawesome/free-solid-svg-icons'  

import {Link, withRouter} from 'react-router-dom';
// import {onLogout} from './../../Redux/auth/AuthAction';
import {connect} from 'react-redux'; 
class Header extends Component {
    constructor(props){
        super();
        this.state={isOpen:false};
    }
    toggle = () => {
        this.setState({isOpen:true});
    }
    logout=()=>{
        this.props.onLogout(this.props.history);
    }
    render() {
        const {isOpen}=this.state;
        return (
            // color="light" light expand="md"
            <div>
            <Navbar className="navbar-expand-sm navbar-dark bg-dark p-0">
              <div className="container">  
              <NavbarBrand to="/dashboard">Blogen</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/view-category">Category</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/add-post">Post</Link>
                  </NavItem>
                </Nav>
                <NavItem  className="navbar-nav mr-3">
                    <a className="nav-link" onClick={this.logout}><FontAwesomeIcon icon={faUserTimes}></FontAwesomeIcon>Logout</a>
                </NavItem>
              </Collapse>
              </div>
             </Navbar>
            
          </div>
        )
    }
}


export default connect(null, {})(withRouter(Header));