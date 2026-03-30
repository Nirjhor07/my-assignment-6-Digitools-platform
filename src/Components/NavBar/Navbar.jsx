import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      {/* left side : logo */}
      <div className="flex-1 ">
        <a className="text-violet-700 font-bold text-xl px-3 py-1 rounded-md cursor-pointer hover:bg-violet-300 hover:text-white transition duration-200 ">
          DigiTools
        </a>
      </div>

      {/* center : Nav lis items - products...FAQ  */}
      <div className="flex-1 flex justify-center hover-3d ">
        <ul className="hidden lg:flex items-center gap-4  ">
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </div>

      {/* right side : cart, btns */}
      <div className="flex-1 flex justify-end items-center gap-4">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="indicator-item -top-1 -right-1 text-red-800">
                {" "}
                8{" "}
              </span>
            </div>
          </div>
        </div>
        <button className="btn btn-ghost">Login</button>
        <button className="btn btn-primary rounded-2xl">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
