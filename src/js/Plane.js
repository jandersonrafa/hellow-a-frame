//AFRAME.registerComponent('...', {});
import React, { Component } from 'react';
import image from '../img/grid.jpg'
import 'aframe'

class Plane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planeImage: "shader: flat; src: url(" +  image  +"); repeat: 5 5"
        }
    }
    render() {
        return (
                <a-entity
                    geometry="primitive: plane; width: 4; height: 4"
                    position="0 0 -4"
                    rotation="-90 0 0"
                    scale="3 3 3"
                    material={this.state.planeImage}
                    >
                </a-entity>
        );
    }
}
                    //</a-scene>material="color: #7BC8A4" /

export default Plane;

