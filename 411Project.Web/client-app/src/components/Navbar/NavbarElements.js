import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

//links on navbar
export const NavLink = styled(Link)`
  color: #15cdfc;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding:1rem 1rem;
  height: 100%;
  cursor: pointer;
  &:active {
    color: #fff;
  }
`;
