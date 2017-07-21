import React from 'react';
import Menu from '../component/menu';
import Bio from '../component/bio';
import Disco from '../component/dicography';

class Main extends React.Component {
  render() {
    return(
      <div className="container">
        <header className="header">
        </header>
        <nav className="navigation">
          <Menu />
        </nav>
        <main className="content">
          <Bio />
          <Disco />
        </main>
        <footer className="footer">

        </footer>
      </div>
    );
  }
}

export default Main;
