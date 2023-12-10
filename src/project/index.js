import Home from "./home";
import { Routes, Route, Link } from "react-router-dom";
import SearchMovie from "./searchMovie";
import Signin from "./users/signin";
import Account from "./users/account";
import EditAccount from "./users/editAccount";
import UserTable from "./users/table";
import UserDetails from "./users/details";
import Signup from "./users/signup";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import SearchMovieDetails from "./searchMovieDetails";

function Project() {
  return (
    <div className="container-fluid">
      <Container fluid>
        <Navbar
          sticky="top"
          className="bg-body-tertiary"
          expand="lg"
          data-bs-theme="light"
        >
          <Navbar.Brand>
            <Link to="/" className="brand-link">
              <img
                src={require("./img/logo.png")}
                height="100"
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

              <Nav.Link
                as={Link}
                to="/project/searchMovie"
                className="nav-Link"
              >
                Search
              </Nav.Link>

              <Nav.Link as={Link} to="/project/signin" className="nav-link">
                Signin
              </Nav.Link>
              <Nav.Link as={Link} to="/project/signup" className="nav-link">
                SignUp
              </Nav.Link>
              <Nav.Link as={Link} to="/project/user" className="nav-link">
                Account
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<Account />} />
        <Route path="/user/edit" element={<EditAccount />} />
        <Route path="/searchMovie" element={<SearchMovie />} />
        <Route path="/search/:search" element={<SearchMovie />} />
        <Route
          path="/searchMovieDetails/:imdbID"
          element={<SearchMovieDetails />}
        />
        <Route path="/admin/users" element={<UserTable />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}
export default Project;
