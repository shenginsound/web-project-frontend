import Home from "./home";
// import Login from "./login";
// import Signup from "./signup";
import Profile from "./profile";
import Search from "./search";
import Details from "./details";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import SportsMap from "./map";
import SearchWeather from "./searchWeather";
import SearchWeatherDetails from "./searchWeatherDetails";
import SearchMovie from "./searchMovie";
import Signin from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";
import { Navbar, Nav, NavDropdown, Container} from "react-bootstrap";

import SearchMovieDetails from "./searchMovieDetails";
// import "./style.css"
// import UserList from "./users/list";
// import UserDetails from "./users/details";
// import SignIn from "./users/signin";
// import Account from "./users/account";


function Project(){
    return(


        <div className="container-fluid" >
              <Container fluid >
              <Navbar fixed="top" className="bg-body-tertiary" expand="lg" data-bs-theme="light">
                <Navbar.Brand>

                        <Link to="/" className="brand-link">
                        <img
              src={require("./img/logo.png")}
              height = "100"
              className="d-inline-block flex-grow"
              alt="React Bootstrap logo"
            />
                        </Link>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="ms-auto">

                        <Nav.Link as={Link} to="/project/" className="nav-Link">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/project/searchMovie" className="nav-Link">
              Search
            </Nav.Link>

            <Nav.Link as={Link} to="/project/signin" className="nav-link">
              Signin
            </Nav.Link>
            <Nav.Link as={Link} to="/project/signup" className="nav-link">
              SignUp
            </Nav.Link>
            <Nav.Link as={Link} to="/project/account" className="nav-link">
              Account
            </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>     
              </Container>


        <Routes>
            <Route path="/" element ={<Home/>} ></Route>;
            <Route path="/profile" element ={<Profile/>} ></Route>;
            <Route path="/search" element ={<Search/>} ></Route>;
            <Route path="/signin" element={<Signin />} ></Route>;
            <Route path="/signup" element={<Signup />} ></Route>;
            
            <Route path="/admin/users" element={<UserTable />} />

            <Route path="/account" element={<Account />} ></Route>;
            <Route path="/account/:id" element={<Account />} />
            <Route path="/details" element ={<Details/>} ></Route>;
            {/* <Route path="/map" element ={<SportsMap/>} ></Route>; */}
            {/* <Route path="/searchWeather" element ={<SearchWeather/>} ></Route>; */}
            {/* <Route path="/searchWeatherDetails/" element ={<SearchWeatherDetails/>} ></Route>; */}
            <Route path="/searchMovie" element ={<SearchMovie/>} ></Route>;
            <Route path="/searchMovieDetails/:imdbID" element ={<SearchMovieDetails/>} ></Route>;

        </Routes>

        </div>


        
    );
    

}
export default Project;