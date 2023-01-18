// import React, { useState } from "react";
// import { RiCloseLine, RiMenuUnfoldFill } from "react-icons/ri";
// import { Link } from "react-router-dom";
// import logo from "../../Assets/tmes.png";
// import "./Navbar.scss";
// import C_btn from "../../Components/Button/Button";
// import EventName from "./Events_name";
// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);

//   return (
//     <nav className="nav_">
//       <div className="navbar_">
//         <div className="navbar_-menu">
//           {toggleMenu ? (
//             <RiCloseLine
//               color="black"
//               size={27}
//               onClick={() => setToggleMenu(false)}
//             />
//           ) : (
//             <RiMenuUnfoldFill
//               color="black"
//               size={27}
//               onClick={() => setToggleMenu(true)}
//             />
//           )}
//           {toggleMenu && (
//             <div className="navbar_-menu_container scale-up-center">
//               <div className="navbar_-menu_container-links">
//                 <p>
//                   <Link className="nav_li" to="/">
//                     Home
//                   </Link>
//                 </p>
//                 <p>
//                   <Link className="nav_li" to="/great-step">
//                     GreatStep
//                   </Link>
//                 </p>
//                 <p>
//                   <Link className="nav_li" to="/great-step/events">
//                     Events
//                   </Link>
//                 </p>
//                 <p>
//                   <Link className="nav_li" to="/aboutus">
//                     AboutUs
//                   </Link>
//                 </p>
//               </div>
//               <div className="navbar_-menu_container-links-sign">
//                 <p>
//                   <Link to="/signin"> Sign In</Link>
//                 </p>
//                 <button>
//                   <Link to="/signup"> Sign up</Link>
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//         <div className="navbar_-links">
//           <div className="navbar_-links_logo">
//             <img src={logo} />
//           </div>
//           <div className="navbar_-links_container">
//             <p>
//               <Link className="nav_li" to="/">
//                 Home
//               </Link>
//             </p>
//             <p>
//               <Link className="nav_li" to="/great-step">
//                 GreatStep
//               </Link>
//             </p>
//             <p>
//               <div className="nav_li">
//                 <Link to="/great-step/events">Events</Link>
//                 <div className="nav_dropdown_ scale-up-center">
//                   <ul>
//                     {EventName.map((eve) => {
//                       const { type, data } = eve;
//                       return (
//                         <React.Fragment>
//                           <li>
//                             {type}
//                             <div className="nav_dropdown_2 scale-up-center">
//                               <ul>
//                                 {data.map((d) => {
//                                   const { name, to } = d;
//                                   return (
//                                     <li key={name}>
//                                       <Link to={to}> {name}</Link>
//                                     </li>
//                                   );
//                                 })}
//                               </ul>
//                             </div>
//                           </li>
//                         </React.Fragment>
//                       );
//                     })}
//                   </ul>
//                 </div>
//               </div>
//             </p>
//             <p>
//               <Link className="nav_li" to="/aboutus">
//                 AboutUs
//               </Link>
//             </p>
//           </div>
//         </div>
//         <div className="navbar_-sign">
//           <p>
//             <Link to="/signin"> Sign In</Link>
//           </p>
//           <C_btn txt="Sign Up" link="/signup"></C_btn>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
