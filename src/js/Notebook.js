import React, { Component } from 'react';
import 'aframe';
//import video from '../video/video.mp4'
import Cable from './Cable'
// const AFRAME = window.AFRAME;

const videoId = "video-tag"
class Notebook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isHidden: true

        }

        // this.state = {
        //     video: "src: " + video
        // }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(evt, teste) {
        evt.target.setAttribute("color", "red")
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    handleClickVideo() {
    }

    render() {
        return ([

            <a-entity position="-0.35 0 -0.105"><Cable /></a-entity>,
            <a-box material="color: #1b1b1b" rotation="-10 0 0" position="0 0.13 -0.15" scale="0.38 0.25 0.01 "></a-box>,
            <a-plane color="white" rotation="-10 0 0" position="0 0.14 -0.144" width="0.34" height="0.20"></a-plane>,
            <a-plane rotation="-90 0 0" src="#notebook" position="0 0.016 0" width="0.37" height="0.24"></a-plane>,
            <a-box material="color: #2a2a2a" position="0 0 0" scale="0.38 0.03 0.25"></a-box>
        ]
        );
    }
}
//<a-entity position="-5.153 1.25523 0.659" >
export default Notebook;