import React, { Component } from 'react';
import 'aframe';
//import video from '../video/video.mp4'

const AFRAME = window.AFRAME;

class Monitor extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     video: "src: " + video
        // }

    }
    //  OPCAO 1 PARA EVENTO CLICK
    // componentWillMount () {
    //     const {AFRAME} = window

    //     if (!AFRAME) return


    // if (!AFRAME.components['sphere-listener']) {
    //   AFRAME.registerComponent('sphere-listener', {
    //     init () {
    //       const {el} = this
    //       const data = this.data;

    //       el.addEventListener('mouseup', (evt) => {
    //         console.log('I was moseup at: ', evt.detail.intersection.point);
    //       })
    //       el.addEventListener('click', (evt) => {

    //         el.setAttribute('color', 'red');
    //         console.log('I was clicked at: ', evt.detail.intersection.point);
    //       });
    //     }
    //   })
    // }
    //}

    handleClick(evt, teste) {
        evt.target.setAttribute("color", "red")
    }

    render() {
        return (

            <a-entity onClick={this.handleClick} position="-5.153 1.25523 0.659" sphere-listener >

                {/* <a-box position="0 0.145 0" material="color: #ffffff"  sphere-listener scale="-0.13863 0.70018 1.19991"/> */}
                {/* <a-plane width="2" height="2" position="0.070 0.143 0.00409" rotation="0 90 0" scale="-0.571 0.30851 1.19991" material={this.state.video} /> */}
                <a-plane width="2" height="2" position="0.070 0.143 0.00409" rotation="0 90 0" scale="-0.571 0.30851 1.19991" material="src: https://ucarecdn.com/bcece0a8-86ce-460e-856b-40dac4875f15/" />
                <a-box position="0 0.145 0" material="color: #ffffff" sphere-listener scale="-0.13863 0.70018 1.19991" />
                <a-box position="0 -0.27 0" material="color: #ffffff" scale="0.09491 0.14386 0.24356" />
                <a-box position="0 -0.38 0" material="color: #ffffff" scale="0.24838 0.08111 0.59805" />
            </a-entity>
        );
    }
}
//<a-entity position="-5.153 1.25523 0.659" >
export default Monitor;