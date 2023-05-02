import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* <h4 className="text-center">All rights Reserved &copy; owner</h4> */}
      <p className="text-center p-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Policy</Link>|
      </p>
    </div>
  );
};

export default Footer;
