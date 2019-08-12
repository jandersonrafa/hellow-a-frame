import React, { Component } from 'react';
import 'aframe'

class Stand extends Component {
    render() {
        return (
            [
                <a-box position="0 0.8 0" rotation="" material="color: #4CC3D9" scale="1.4 0.1 9"/>,
                <a-cylinder radius="0.5" position="-0.5 0.4 -4.4" material="color: #FFC65D" scale="0.1 0.7 0.1"/>,
                <a-cylinder radius="0.5" position="0.5 0.4 -4.4" material="color: #FFC65D" scale="0.1 0.7 0.1"/>,
                <a-cylinder radius="0.5" position="0.5 0.4 0" material="color: #FFC65D" scale="0.1 0.7 0.1"/>,
                <a-cylinder radius="0.5" position="-0.5 0.4 0" material="color: #FFC65D" scale="0.1 0.7 0.1"/>,
                <a-cylinder radius="0.5" position="-0.5 0.4 4.4" material="color: #FFC65D" scale="0.1 0.7 0.1"/>,
                <a-cylinder radius="0.5" position="0.5 0.4 4.4" material="color: #FFC65D" scale="0.1 0.7 0.1"/>
            ]
        );
    }
}

export default Stand;