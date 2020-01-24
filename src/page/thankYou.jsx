//import plugin
import React from 'react';
import { Link } from "react-router-dom";

//import style
import "../style/nomatch.css"

// untuk mengembalikan respon saat tidak ditemukan page yang sesuai
class ThankYou extends React.Component{
    render(){
        return(
            <div class="jumbotron text-center">
                <h1 class="display-3">Thank You!</h1>
                <p class="lead"><strong>Please check your email</strong> for further instructions on how to complete your account setup.</p>
                <hr/>
                <p>
                    Having trouble? <Link to="/" class="btn btn-primary btn-sm" role="button">Contact us</Link>
                </p>
                <p class="lead">
                    <Link to="/" class="btn btn-primary btn-sm" role="button">Continue to homepage</Link>
                </p>
            </div>
        )
    }
}

//mengeksport class NotMatch ke main-route.js
export default ThankYou;
