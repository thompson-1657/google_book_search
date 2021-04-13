import React from "react";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";

import SearchForm from "../components/SearchForm"
// import BooksList from "../components/BooksList"
import {Container} from "react-bootstrap"



function Search() {


return (
 <>
 
    <Container>
        <Jumbotron />
        <SearchForm />
        {/* <BooksList /> */}
    </Container>
</>
);
}


export default Search;
