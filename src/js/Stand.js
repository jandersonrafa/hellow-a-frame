//AFRAME.registerComponent('...', {});
import React, { Component } from 'react';
import 'aframe'

class Stand extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            [<a-entity geometry="" position="-5.28993 0.72978 -2.8602" rotation="" material="color: #4CC3D9" scale="1.4 0.1 9"></a-entity>,
            <a-entity geometry="primitive: cylinder; radius: 0.5" position="-4.73366 0.33188 -7.15353" material="color: #FFC65D" scale="0.11 0.69 0.11" rotation="0 0.02 0"></a-entity>,
            <a-entity geometry="primitive: cylinder; radius: 0.5" position="-5.73366 0.33188 -7.15353" material="color: #FFC65D" scale="0.11 0.69 0.11" rotation="0 0.02 0"></a-entity>,
            <a-entity geometry="primitive: cylinder; radius: 0.5" position="-4.73366 0.33188 -3" material="color: #FFC65D" scale="0.11 0.69 0.11" rotation="0 0.02 0"></a-entity>,
            <a-entity geometry="primitive: cylinder; radius: 0.5" position="-5.73366 0.33188 -3" material="color: #FFC65D" scale="0.11 0.69 0.11" rotation="0 0.02 0"></a-entity>,
            <a-entity geometry="primitive: cylinder; radius: 0.5" position="-4.73366 0.33188 1.5" material="color: #FFC65D" scale="0.11 0.69 0.11" rotation="0 0.02 0"></a-entity>,
            <a-entity geometry="primitive: cylinder; radius: 0.5" position="-5.73366 0.33188 1.5" material="color: #FFC65D" scale="0.11 0.69 0.11" rotation="0 0.02 0"></a-entity>
        ]
        );
    }
}

export default Stand;

