import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <>
      <footer className="bg-green-300 py-12">
        <div className="container mx-auto px-2 text-green-900">
          <div className="flex justify-evenly">
            <div className="text-2xl font-bold mb-4">
              <h2>Explore Us</h2>
              <ul className="p-5">
                <li className="flex flex-row gap-2 justify-start text-sm">
                  <AiFillGithub /> GitHub
                </li>
                <li className="flex flex-row gap-2 justify-start text-sm">
                  <AiFillYoutube /> Youtube
                </li>
                <li className="flex flex-row gap-2 justify-start text-sm">
                  <AiFillLinkedin /> Linked-in
                </li>
              </ul>
            </div>
            <div className="text-2xl font-bold mb-4">
              <h2>Learn More</h2>
              <ul className="text-sm p-5">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/galary">Galary</Link>
                </li>
              </ul>
            </div>
            <div className="text-2xl font-bold mb-4 ">
              <h2>The Grand Exotica</h2>
              <p className="text-sm p-5">
                @ Copy right 2019 by The Grand Exotica{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
