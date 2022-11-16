import React from "react";
import { useState, useEffect } from "react";
import GetStarted from "./GetStarted";
import Table from "./Table";
function NavBar() {
  const [show, handleShow] = useState(false);
  const handleTransitionNavBar = () => {
    if (window.scrollY > 100) handleShow(true);
    else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleTransitionNavBar);
    return () => window.removeEventListener("scroll", handleTransitionNavBar);
  }, []);
  return (
    <>
      <div
        className={` flex h-24 w-screen border-2 border-slate-100  transition {${
          show && " fixed bg-white inset-0 transition "
        }`}
      >
        <div className="flex pt-5 mx-auto font-medium text-lg">
          <div className="mr-40  ">
            <img
              src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg"
              height="5"
              width="100"
              alt="Coinbase Logo"
            />
          </div>
          <ul className="flex flex-row mr-40">
            <li className="mr-8">Explore </li>
            <li className="mr-8"> Learn </li>
            <li className="mr-8">Individuals </li>
            <li className="mr-8"> Businesses </li>
            <li className="mr-8">Developers</li>
            <li>Company </li>
          </ul>
          <div className="flex flex-row">
            <h1 className="mr-6 hover:text-blue-500 cursor-pointer">Sign in</h1>
            <button className="bg-blue-600 h-12 w-36 text-white rounded mb-8 hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <GetStarted />
      <Table />
    </>
  );
}
export default NavBar;
