import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>A Website for Wollman Associates LLC, Made with <span className="icon -love"><RiHeart2Line/></span> by <Link to="https://www.dsguardiaservices.com">dsguardiaservices</Link></p>
    </div>
  </footer>
)

export default Footer