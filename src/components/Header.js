import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const HelpQueueHeader = styled.h1`
  font-size: 70px;
  text-align: center;
  color: white;
  font-family: Papyrus;
`;

const StyledWrapper = styled.section`
  background-color: orange;
`;

function Header(){
  return (
    <StyledWrapper>
    <React.Fragment>
        <HelpQueueHeader>
          Help Queue
        </HelpQueueHeader>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
    </React.Fragment>
    </StyledWrapper>
  );
}

export default Header;