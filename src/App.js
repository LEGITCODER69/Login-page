import React from 'react'; // Make sure to import React
import './App.css';

function App() {
  return (
    <div>
      <section>
        <div className="form-box"> {/* Use className instead of class */}
          <div className="form-value"> {/* Use className instead of class */}
            <form action="">
              <h2>Login</h2>
              <div className="inputbox"> {/* Use className instead of class */}
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" required />
                <label htmlFor="">Email</label> {/* Use htmlFor instead of for */}
              </div>
              <div className="inputbox"> {/* Use className instead of class */}
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required />
                <label htmlFor="">Password</label> {/* Use htmlFor instead of for */}
              </div>
              <div className="forget"> {/* Use className instead of class */}
                <label htmlFor="">
                  <input type="checkbox" />Remember Me{' '}
                  <a href="#">Forget Password</a>
                </label>
              </div>
              <button>Log in</button>
              <div className="register"> {/* Use className instead of class */}
                <p>
                  Don't have an account <a href="#">Register</a>
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
