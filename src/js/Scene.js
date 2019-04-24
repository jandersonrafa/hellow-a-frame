import React, { Component } from 'react';
import 'aframe'
import image from '../img/grid.jpg'
import Plane from './Plane'
import Stand from './Stand'

class Scene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planeImage: "shader: flat; src: url(" +  image  +"); repeat: 5 5"
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
                    <Plane />
                    <Stand />
            </a-scene>
        );
    }
}
                    //</a-scene>material="color: #7BC8A4" /

export default Scene;
