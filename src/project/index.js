import Home from "./home";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import SearchMovie from "./searchMovie";
import Signin from "./users/signin";
import Account from "./users/account";
import EditAccount from "./users/editAccount";
import Signup from "./users/signup";
import SearchMovieDetails from "./searchMovieDetails";

import { Provider } from "react-redux";
import UserTable from "./users/table";
import UserDetails from "./users/details";

function Project() {
  return (
    <div className="container-fluid">
      <h1>Project</h1>
      <div className="row">
        <div className="col-2">
          <div className="list-group">
            <Link to="/project/" className="list-group-item">
              Home
            </Link>
            <Link to="/project/signin" className="list-group-item">
              Signin
            </Link>
            <Link to="/project/signup" className="list-group-item">
              SignUp
            </Link>
            <Link to="/project/user" className="list-group-item">
              Account
            </Link>
            <Link to="/project/searchMovie" className="list-group-item">
              Search Movie
            </Link>
          </div>
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user" element={<Account />} />
            <Route path="/user/edit" element={<EditAccount />} />
            <Route path="/searchMovie" element={<SearchMovie />} />
            <Route path="/search/:search" element={<SearchMovie />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route
              path="/searchMovieDetails/:imdbID"
              element={<SearchMovieDetails />}
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Project;
