// import React, { useState } from 'react';
// import './Login.css';
// // import { Link } from 'react-router-dom';

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className="wrapper">
//       <div className="title-text">
//         <div className={`title ${isLogin ? 'signup' : 'login'}`}>{isLogin ? 'Signup Form' : 'Login Form'}</div>
//       </div>
//       <div className="form-container">
//         <div className="slide-controls">
//           <input type="radio" name="slide" id="signup" checked={!isLogin} onChange={() => setIsLogin(false)} />
//           <input type="radio" name="slide" id="login" checked={isLogin} onChange={() => setIsLogin(true)} />
//           <label htmlFor="login" className={`slide login ${isLogin ? 'active' : ''}`} onClick={() => setIsLogin(true)}>
//             Signup
//           </label>
//           <label htmlFor="signup" className={`slide signup ${!isLogin ? 'active' : ''}`} onClick={() => setIsLogin(false)}>
//             Login
//           </label>
//           <div className="slider-tab"></div>
//         </div>
//         <div className="form-inner">
//           <form action="#" className={isLogin ? 'login' : 'signup'}>
//             <div className="field">
//               <input type="text" placeholder="Username" required />
//             </div>
//             {isLogin && (
//               <div className="field">
//                 <input type="email" placeholder="Email" required />
//               </div>
//             )}
//             <div className="field">
//               <input type="password" placeholder="Password" required />
//             </div>
//             <div className="field btn">
//               <div className="btn-layer"></div>
//               <input type="submit" onClick={() => setIsLogin(false)} value={isLogin ? 'Signup' : 'Login'} />
//             </div>
//             {/* {!isLogin && (
//               <div className="signup-link">
//                 Not a member? <Link to="#">Signup now</Link>
//               </div>
//             )} */}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;