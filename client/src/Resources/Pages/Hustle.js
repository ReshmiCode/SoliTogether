import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';

import './ResourcePages.css'
import { render } from '@testing-library/react';

class Hustle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          resources: []
        };
      }
    
    componentDidMount() {
        //Getfrom database and then do 
        //this.setState({ resources: data });
    }

    render(){
        const { resources } = this.state;
        return(
            <div>
                <div  className="links">
                    <Link to ='/resources'> <p>🌟 Together Alone : Home Page🌟</p> </Link>
                </div>
                <div className="resource-header">
                    <h1>💻 To Hustle 💻</h1>
                </div>
                <div className="resource">
                    <Col className="card-padding">
                        {resources.map (resource => (
                            <a href={resource.link} target="_blank">
                                <Card className="portfolio-card">
                                    <CardBody>
                                        <CardTitle>{resource.name}</CardTitle>
                                        <CardText><strong>Medium: </strong> {resource.medium} </CardText>
                                        <CardText><strong>Description: </strong> {resource.description} </CardText>
                                        <CardText><strong>Submitted By: </strong> {resource.submittedBy} </CardText>
                                    </CardBody>
                                </Card>
                            </a>
                        ))}
                    </Col>
                </div>
                <div  className="links">
                    <Link to ='/submit-resource' > <p>Submit A Resource</p> </Link>
                    <Link to ='/get-support' > <p>💜 To Get Support 💜</p> </Link>
                    <Link to ='/hustle' > <p>💻 To Hustle 💻</p> </Link>
                    <Link to ='/relax' >  <p>📖 To Relax 📖</p>  </Link>
                    <Link to ='/attend' > <p>🎟️ To Attend 🎟️</p> </Link>
                    <Link to ='/host' > <p>💫 To Host 💫</p> </Link>
                </div>
            </div>
        );
    }
};

export default Hustle;