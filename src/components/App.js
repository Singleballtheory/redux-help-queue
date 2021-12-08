import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components';

const StyledWrapper = styled.section`
  background-color: purple;
`;

function App(){
  return ( 
    <StyledWrapper>
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <TicketControl />
        </Route>
      </Switch>
    </Router>
    </StyledWrapper>
  );
}

export default App;