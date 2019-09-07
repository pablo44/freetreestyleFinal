import React, { Component } from "react";
import ReactDOM from "react-dom";
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
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">FreeTreeStyle</NavbarBrand>
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
                                        Marzena
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
            </div>
        );
    }
}
export default withRouter(NavbarApp);
