import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function Example(args) {
  const navitems = [
    "AboutUs",
    "AccomoDations",
    "Retreats",
    "Activities",
    "Gallery",
    "Blog",
    "ContactUs",
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar {...args} expand="md" container={"lg"}  >
      <NavbarBrand href="/" className="navbarHeading" >Dunagiri</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto __myitems" navbar>
          {navitems.map((navitem, index) => (
            <NavItem key={index}  className="navitem_text" >{navitem}</NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Example;
