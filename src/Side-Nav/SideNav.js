import React from 'react'

class SideNav extends React.Component {
    constructor(props){
        super(props);


    }
    render() {
        return (
            <div className="sidenav" style={{width: this.props.width}}>
                <button onClick={this.props.closeNav}>X</button>
                <a href='#section'>About</a>
                <a href='#section'>Services</a>
                <a href='#section'>Clients</a>
                <a href='#section'>Contact</a>
            </div>
        )
    }
}

export default SideNav
