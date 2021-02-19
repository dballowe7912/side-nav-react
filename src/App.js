import React from 'react';
import SideNav from './Side-Nav/SideNav';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      width: '0%'
    }

    this.openSidenav = this.openSidenav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openSidenav(){
    this.setState({width: '25%'})
  }

  closeNav(){
    this.setState({width: '0%'})
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.openSidenav}>Open</button>
        <SideNav width={this.state.width} closeNav={this.closeNav}/>
      </div>
    );
  }
}

export default App;
