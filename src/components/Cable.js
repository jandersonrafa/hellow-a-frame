import React, { Component } from 'react';
import 'aframe';
//import video from '../video/video.mp4'

// const AFRAME = window.AFRAME;

const videoId = "video-tag"
class Cable extends Component {
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
            <a-box position="0.15 0 0" color="white" scale=" 0.025 0.015 0.01"></a-box>,
            <a-box position="-0.15 0 0" color="white" scale="0.025 0.015 0.01"></a-box>,
            <a-cylinder rotation="0 0 90" color="gray" height="0.3" radius="0.003"></a-cylinder>

        ]
        );
    }
}
//<a-entity position="-5.153 1.25523 0.659" >
export default Cable;