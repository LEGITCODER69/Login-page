import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form action="">
              <h2>Login</h2>
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" required />
                <label htmlFor="">Email</label>
              </div>
              <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required />
                <label htmlFor="">Password</label>
              </div>
              <div className="forget">
                <label>
                  <input type="checkbox" />Remember Me{' '}
                  <button type="button">Forget Password</button>
                </label>
              </div>
              <button>Log in</button>
              <div className="register">
                <p>
                  Don't have an account <button type="button">Register</button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
}

export default App;
