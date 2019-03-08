import React from "react";
import { Link } from "react-router-dom";
import {
  Header,
  HeaderContainer,
  Logo,
  HeaderNav,
  HeaderNavItem,
  HeaderNavItemLink,
  HeaderNavItemSpan
} from "../styles/NavbarStyles";

const NoStyleLink = props => (
  <Link to={`${props.to}`} style={{ textDecoration: "none" }}>
    {props.children}
  </Link>
);

export default class NavBar extends React.Component {
  render() {
    return (
      <Header>
        <HeaderContainer>
          <NoStyleLink to="/">
            <Logo>Airbus</Logo>
          </NoStyleLink>
          <HeaderNav>
            <HeaderNavItem>
              <NoStyleLink to="/">
                <HeaderNavItemLink>Home</HeaderNavItemLink>
                <HeaderNavItemSpan />
              </NoStyleLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <NoStyleLink to="/flights">
                <HeaderNavItemLink>Flights</HeaderNavItemLink>
                <HeaderNavItemSpan />
              </NoStyleLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <NoStyleLink to="/add">
                <HeaderNavItemLink>Add Flight</HeaderNavItemLink>
                <HeaderNavItemSpan />
              </NoStyleLink>
            </HeaderNavItem>
          </HeaderNav>
        </HeaderContainer>
      </Header>
    );
  }
}
