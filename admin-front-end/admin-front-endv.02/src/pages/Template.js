import React, { Component } from 'react';

import { Button,
  Table,
  Row,
  Col,
  Navbar,
  Container
} from 'react-bootstrap';
import './Pages.css'
import Header from '../Header/Header';

class Template extends Component {
  render(){ 
    return( 
      <div className = "template">
          <Header />
          <Container>
            I am Template page ^^ ! Hehe.
          </Container>
      </div>
    )
  };
}
export default Template;
