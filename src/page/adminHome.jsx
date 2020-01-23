//import plugin
import React from 'react';
import { Link } from "react-router-dom";

//import style
import "../style/nomatch.css"
import NavbarAdmin from "../component/navbarAdmin"
import NavbarRightAdmin from "../component/navbarRightAdmin"

// untuk mengembalikan respon saat tidak ditemukan page yang sesuai
class AdminHome extends React.Component{
    render(){
        return(
            <nav>
                <NavbarAdmin/>
                <NavbarRightAdmin/>
            </nav>
        )
    }
}

//mengeksport class NotMatch ke main-route.js
export default AdminHome;