import React, { Component } from 'react';
import 'aframe';
//import video from '../video/video.mp4'

// const AFRAME = window.AFRAME;

const videoId = "video-tag"
class Monitor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isHidden: true

          }

        // this.state = {
        //     video: "src: " + video
        // }
        this.handleClick =this.handleClick.bind(this)

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
        this.setState({
            isHidden: !this.state.isHidden
          })
    }

    handleClickVideo() {
        let video = document.querySelector("#"+videoId)
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }

    render() {
        return ([
            <a-entity position="-5.153 1.25523 0.659">

                {/* <a-box position="0 0.145 0" material="color: #ffffff"  sphere-listener scale="-0.13863 0.70018 1.19991"/> */}
                {/* <a-plane width="2" height="2" position="0.070 0.143 0.00409" rotation="0 90 0" scale="-0.571 0.30851 1.19991" material={this.state.video} /> */}
                {!this.state.isHidden && <a-video onClick={this.handleClickVideo} src={"#"+videoId} width="2" height="2" position="0.070 0.143 0.00409" rotation="0 90 0" scale="-0.571 0.30851 1.19991"></a-video>}
                <a-box onClick={this.handleClick} position="0 0.145 0" material="color: #ffffff" sphere-listener scale="-0.13863 0.70018 1.19991" />
                <a-box onClick={this.handleClick} position="0 -0.27 0" material="color: #ffffff" scale="0.09491 0.14386 0.24356" />
                <a-box onClick={this.handleClick} position="0 -0.38 0" material="color: #ffffff" scale="0.24838 0.08111 0.59805" />
            </a-entity>]
        );
    }
}
//<a-entity position="-5.153 1.25523 0.659" >
export default Monitor;