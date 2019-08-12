import React, { Component } from 'react';
import 'aframe';
import image from '../img/wood.jpg'
class Lab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planeImage: "shader: flat; src: url(" + image + "); repeat: 10 10"
        }
    }

    render() {
        return ([
            <a-box position="-8 2 0" rotation="" material="color: #affae9" scale="0.1 4 16" geometry=""></a-box>,
            <a-box position="8 2 0" rotation="" material="color: #affae9" scale="0.1 4 16" geometry=""></a-box>,
            <a-box position="0 2 -8" rotation="" material="color: #b6f3d5" scale="16 4 0.1" geometry=""></a-box>,
            <a-box position="0 2 8" rotation="" material="color: #b6f3d5" scale="16 4 0.1" geometry=""></a-box>,
            <a-box position="0 4 7.9" rotation="" material="color: #804040" scale="16 0.1 0.05" geometry=""></a-box>,
            <a-box position="0 4 -7.9" rotation="" material="color: #804040" scale="16 0.1 0.05" geometry=""></a-box>,
            <a-box position="7.9 4 0" rotation="" material="color: #804040" scale="0.05 0.1 16" geometry=""></a-box>,
            <a-box position="-7.9 4 0" rotation="" material="color: #804040" scale="0.05 0.1 16" geometry=""></a-box>,
            <a-entity geometry="primitive: plane; width: 4; height: 4" position="0 4 0" rotation="90 0 180" scale="4 4 4" material={this.state.planeImage}            >            </a-entity>
        ]
        );
    }
}
export default Lab;