import React from "react";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";

import SearchForm from "../components/SearchForm"
import ResultsContainer from "../components/ResultsContainer"
import {Container,Row, Col} from "react-bootstrap"



function Search() {
  

return (
    <>
    <Container>
        <Jumbotron />
        <Row>
            <Col>
        <SearchForm />
        </Col>
        </Row>
        <Row>
            <Col>
        <ResultsContainer />
         </Col>
        )
        
     </Row>
    </Container>
    </>

);
}


export default Search;
