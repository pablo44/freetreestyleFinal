import React, {Component} from "react";
import ReactDOM from "react-dom";
import {withRouter, NavLink} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem
  } from "reactstrap";

 class NavbarApp extends Component {
     constructor (){
         super()
         this.state ={}
     }
      render () {
          return (
              <p>gugu</p>
          )
      }
  }
  export default withRouter(NavbarApp);
