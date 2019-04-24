import React, { Component } from 'react';
import 'aframe'
import Plane from './Plane'
import Stand from './Stand'
import Monitor from './Monitor'

class Scene extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <a-scene>
                <a-camera><a-cursor color="red"></a-cursor></a-camera> 
                    <Plane />
                    <Stand />
                    <Monitor/>
            </a-scene>
        );
    }
}

export default Scene;
