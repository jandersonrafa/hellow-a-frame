import React, { Component } from 'react';
import 'aframe'
import image from '../img/grid.jpg'

class Scene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planeImage: "shader: flat; src: url(" +  image  +"); repeat: 10 10"
        }
    }
    render() {
        return (
            <a-scene>
                <a-entity
                    geometry="primitive: box"
                    position="-1 0.5 -3"
                    rotation="0 45 0"
                    material="color: #4CC3D9" />
                <a-entity
                    geometry="primitive: sphere; radius: 1.25;"
                    position="0 1.25 -5"
                    material="color: #EF2D5E" />
                <a-entity
                    geometry="primitive: cylinder; radius: 0.5, height: 1.5"
                    position="1 0.75 -3"
                    material="color: #FFC65D" />
                <a-entity
                    geometry="primitive: plane; width: 4; height: 4"
                    position="0 0 -4"
                    rotation="-90 0 0"
                    scale="3 3 3"
                    material={this.state.planeImage}
                    >
                    </a-entity>
            </a-scene>
        );
    }
}
                    //</a-scene>material="color: #7BC8A4" /

export default Scene;
