<<<<<<< HEAD
=======

>>>>>>> basic-frontend
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

//links on navbar
export const NavLink = styled(Link)`
  color: #15cdfc;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 1rem;
  height: 100%;
  cursor: pointer;
  &:active {
    color: #fff;
  }
`;
<<<<<<< HEAD

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: linear-gradient(to right, #67b26b, #4ca2cb) !important;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
=======
>>>>>>> basic-frontend
