import React, { Component } from 'react';
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
import '././../../App.css';

class Home extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <img
                                src="https://images.pexels.com/photos/4863289/pexels-photo-4863289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                height={100}
                                width={200}
                                alt="MDB Logo"/>
                {/* <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.png"
                                class="me-2"
                                height="20"
                                alt="MDB Logo"
                                loading="lazy"
                            />
                            <small>MDBootstrap</small>
                        </a>
                        <Link to="/Home">Home</Link>
                        <Link to="/Contact">Contact us</Link>
                        <Link to="/Signup">Sign up</Link>
                    </div>
                </nav> */}
            </div>
        );
    }
}
export default Home;