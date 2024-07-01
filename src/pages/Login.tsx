// Login.tsx

import React from 'react';
import GlobalStyle from "@pages/chat/global-styles";


const Login: React.FC = () => {
  return (
    <>
    <GlobalStyle />
    <div id="login-screen" className="bg-cover flex " style={{ width: '100vw', height: '100vh', backgroundImage: '/assets/images/windows7-bg.png' }}>
      <div id="login-box">

      
        <h1>Windows 7</h1>
        <form>
          <div>
            <div>
              <img src="/assets/images/profile-pic.png" alt="Profile" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            </div>
            <h3>Jan Pirot</h3>
            {/* <label htmlFor="username">Username</label> */}
            {/* <input type="text" id="username" name="username" required /> */}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
        <img src="/assets/images/ndclogo.png" alt="NDC" style={{ width: '240px', height: '100px', objectFit: 'cover' }} />
    </div>
    </>
  );
};

export default Login;