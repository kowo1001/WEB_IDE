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

class ProjectManager extends Component {
  render(){ 
    return( 
      <div className = "project-manager">
          <Container>
            I am ProjectManager page ^^ ! Hehe.
          </Container>
      </div>
    )
  };
}
export default ProjectManager;
