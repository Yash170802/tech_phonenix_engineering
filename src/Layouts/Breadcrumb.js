import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = (props) => {
    return (
        <div className="breadcrumbs d-flex align-items-center" style={props.img}>
            <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
                <h2>{props.main}</h2>
                <ol>
                    <li><Link to='/'>Home</Link></li>
                    <li>{props.pagename}</li>
                </ol>
            </div>
        </div>
    )
}
export default Breadcrumbs;