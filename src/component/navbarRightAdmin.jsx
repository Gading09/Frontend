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

class NavbarRightAdmin extends Component{
    render (){
        return(
            <React.Fragment>

            </React.Fragment>
        );
    }
}

export default connect("is_login, username", actions)(withRouter(NavbarRightAdmin));