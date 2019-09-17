import React, { Component } from "react";

import { withRouter, NavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import Cooperators from "../Cooperators";


class NavbarApp extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <header>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"><img src={require("../images/logomarsena.png")} alt="logomarseny"/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/gallery">Gallery</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/orderfurniture">OrderFurniture</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Cooperators
                    </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <Cooperators />
                      </DropdownItem>
                                    <DropdownItem>
                                        Paul
                      </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                      </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}
export default withRouter(NavbarApp);
