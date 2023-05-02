import React from 'react';
import logo from './images/logo.png';
import './css/1.css';

function App() {
  return (
    <div>
      <header>
        <nav>
          <div className="logo-container">
            <img className="logo" src={logo} alt="My Website" />
          </div>
          <div className="text-container">
            <h1> |&nbsp; &nbsp;EY DATA PRIVACY MANAGER</h1>
          </div>
        </nav>
      </header>

      <div className="container">
        <input type="hidden" name="page" value="1" />
        <main>
          <div className="box">
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <h1>WELCOME</h1>
            <br/>
            <h2><u>EY Data Privacy Manager</u></h2>
            <br/>
            <h3>Fill in the questionnaire to understand the privacy health of your organization</h3>
            <br/><br/>
            <form action="/welcome" method="get">
              <button type="submit">Let's Go!</button>
            </form>
          </div>
        </main>
        <footer>
          {/* Your footer content here */}
        </footer>
      </div>
    </div>
  );
}

export default App;
