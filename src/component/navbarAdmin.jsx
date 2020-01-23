import React, {Component} from 'react';
// import "../style/css-final.css";
import "../style/bootstrap.min.css";
import { Link } from "react-router-dom";
// import Search from './search';
import { actions, store } from "../store";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import ModalSignIn from '../component/modalSignIn'
import ModalSignUp from '../component/modalSignUp'
import "../style/navbar.css"

class NavbarAdmin extends Component{
    postSignout = async () => {
        await localStorage.removeItem("token");
    }
    render (){
        return(
            <header>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <nav class="navbar navbar-expand-lg navbar-light bg-warning fixed-top">
                    <a class="navbar-brand" href="#"><span style={{fontWeight:"bold",fontSize:"30px",color:"white",fontFamily:"'Caveat',cursive", paddingRight:"20px"}}>E-mie</span>Welcome, Admin</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <ul class="navbar-nav my-2 my-lg-0 ml-auto">
                        <li class="nav-item">
                            <Link to="/" class="nav-link" onClick={this.postSignout}><i class="fa fa-sign-out fa-lg"></i></Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default connect("is_login, username", actions)(withRouter(NavbarAdmin));