import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';

import './ResourcePages.css'
import { render } from '@testing-library/react';

const axios = require('axios').default;

class GetSupport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          resources: []
        };
      }
    
    componentDidMount() {
        axios.get('https://hdt-node-servers.herokuapp.com/SoliTogether/api/v1/resources')
          .then(function (response) {
            let resourceData = [];
            let resourceArray = response.data.data;
            resourceArray.forEach(element => {
                let elementCategory = element.category;
                console.log(elementCategory);
                if ((elementCategory) === ("To Get Support")){
                    console.log(element);
                    resourceData.push(element);
                }
            });
            this.setState({ resources :  resourceData});
          }.bind(this))
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {            
          }
        );  
    }
    render(){
        const { resources } = this.state;
        return(
            <div>
                <div  className="links">
                    <Link to ='/resources'> <p>🌟 Together Alone : Home Page🌟</p> </Link>
                </div>
                <div  className="resource-header">
                    <h1>💜Get Support 💜</h1>
                </div>
                <div className="resource">
                    <Col className="card-padding">
                        {resources.map (resource => (
                            <a href={resource.url} target="_blank">
                                <Card className="portfolio-card">
                                    <CardBody>
                                        <CardTitle>{resource.title}</CardTitle>
                                        <CardText><strong>Medium: </strong> {resource.medium} </CardText>
                                        <CardText><strong>Description: </strong> {resource.description} </CardText>
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

export default GetSupport;