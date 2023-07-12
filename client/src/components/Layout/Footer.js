import React from "react";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Policy from "../../pages/Policy";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-dark text-light p-3">
      <h4 className="text-center"> All rights reserved</h4>
      <p className="text-center mt-3">
        <Link to="/about" element={<About />}>
          About
        </Link>{" "}
        ||
        <Link to="/contact" elemant={<Contact />}>
          Contact
        </Link>{" "}
        ||
        <Link to="/policy" elemant={<Policy />}>
          Policy
        </Link>
      </p>
    </div>
  );
}
