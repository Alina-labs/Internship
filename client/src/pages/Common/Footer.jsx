//import React from 'react'
// import { NavLink } from 'react-router-dom';

// import Logo from '../../assets/Logo/Logo.png';
const Footer=()=> {
  return (
    <section className="mx-auto mt-12 max-w-xxl">
      <div className="container relative z-10 max-w-xxl px-4">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <div className="w-auto p-8">
            <a href="#">
              <div className="inline-flex items-center">
                {/* <img src={Logo}
                  width="200"
                  height="86"                  
                /> */}
              </div>
            </a>
          </div>
          <div className="w-auto p-4">
            <ul className="-m-5 flex flex-wrap items-center">
              <li className="p-5">
                <a className="font-medium text-gray-600 hover:text-gray-700" href="/policy">
                  Privacy Policy
                </a>
              </li>
              <li className="p-5">
                <a className="font-medium text-gray-600 hover:text-gray-700" href="/terms">
                  Terms of Service
                </a>
              </li>
              {/* <li className="p-5">
                <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                  Return Policy
                </a>
              </li> */}
              {/* <NavLink to="/contact"> */}
              <li className="p-5">
                <a className="font-medium text-gray-600 hover:text-gray-700" href="/contact">
                  Contact Us
                </a>
              </li>
              {/* </NavLink> */}
            </ul>
          </div>
          <div className="w-auto p-8">
            <div className="-m-1.5 flex flex-wrap">
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Footer;