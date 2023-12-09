import Home from "./home";
import Profile from "./profile";
import Details from "./details";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import SearchMovie from "./searchMovie";
import Signin from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";
import SearchMovieDetails from "./searchMovieDetails";

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
            <Link to="/project/admin/users" className="list-group-item">
              UserTable
            </Link>
            <Link to="/project/account" className="list-group-item">
              Account
            </Link>
            <Link to="/project/searchMovie" className="list-group-item">
              searchMovie
            </Link>
          </div>
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />}></Route>;
            <Route path="/profile" element={<Profile />}></Route>;
            <Route path="/signin" element={<Signin />}></Route>;
            <Route path="/signup" element={<Signup />}></Route>;
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/account" element={<Account />}></Route>;
            <Route path="/account/:id" element={<Account />} />
            <Route path="/details" element={<Details />}></Route>;
            <Route path="/searchMovie" element={<SearchMovie />}></Route>;
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
