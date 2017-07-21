import React from 'react';
import Menu from '../component/menu';

class About extends React.Component {
  render() {
    return(
      <div className="container">
        <header className="header">
        </header>
        <nav className="navigation">
          <Menu />
        </nav>
        <main className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </main>
        <footer className="footer">

        </footer>
      </div>
    );
  }
}

export default About;
