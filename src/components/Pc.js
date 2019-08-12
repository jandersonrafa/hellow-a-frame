import React, { Component } from 'react';
import 'aframe';

class Pc extends Component {
    constructor(props) {
        super(props);

        this.handleClick =this.handleClick.bind(this)

    }

    handleClick(evt, teste) {
        evt.target.setAttribute("color", "red")
    }

    render() {
        return ([
                <a-box onClick={this.handleClick} position="0 0.52 0" material="color: #c0c0c0" sphere-listener scale="-0.14 0.7 1.2" />,
                <a-box onClick={this.handleClick} position="0 0.1 0" material="color: #c0c0c0" scale="0.09 0.14 0.24" />,
                <a-box onClick={this.handleClick} position="0 0 0" material="color: #c0c0c0" scale="0.2 0.08 0.6" />
        ]);
    }
}
//<a-entity position="-5.153 1.25523 0.659" >
export default Pc;