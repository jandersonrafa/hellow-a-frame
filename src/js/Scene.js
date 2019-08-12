import React, { Component } from 'react';
import 'aframe'
import Plane from '../components/Plane'
import Stand from '../components/Stand'
import Monitor from '../components/Monitor'
import Pc from '../components/Pc'
import ToolPrinter from '../tools/ToolPrinter'
import ToolPrinter2 from '../tools/ToolPrinter2'
import Lab from '../components/Lab'

import notebook from '../img/notebook.png'
import arrow from '../img/arrow.png'

const videoId = "video-tag"
class Scene extends Component {
    constructor(props) {
        super(props);

        this.myRef = React.createRef();
        this.handleClick = this.handleClick.bind(this)

    }


    componentDidMount() {
        var hoverChangeColor = document.getElementsByClassName('hoverChangeColor');
        for (let i = 0; i < hoverChangeColor.length; i++) {
            hoverChangeColor[i].addEventListener('mouseenter', function (evt) {
                if (evt.target.nodeName == 'A-BOX') {
                    evt.target.setAttribute("color", "blue")
                    evt.target.setAttribute("opacity", "0.2")
                }

            })
            hoverChangeColor[i].addEventListener('mouseleave', function (evt) {
                if (evt.target.nodeName == 'A-BOX') {
                    evt.target.setAttribute("color", "white")
                }
            })
        }
        window.addEventListener("keydown", (e) => {

            var angle = document.getElementById('camera').getAttribute('rotation')

            if (event.key == 'MediaFastForward') {
                const player = this.myRef.current.object3D
                var x = 0.1 * Math.cos(angle.y * Math.PI / 180)
                var y = 0.1 * Math.sin(angle.y * Math.PI / 180)
                var pos = player.position
                player.position.setX(player.position.x - y)
                player.position.setZ(player.position.z - x)

            }
            //traz
            else if (event.key == 'MediaRewind') {
                const player = this.myRef.current.object3D
                var x = 0.1 * Math.cos(angle.y * Math.PI / 180)
                var y = 0.1 * Math.sin(angle.y * Math.PI / 180)
                var pos = player.position
                player.position.setX(player.position.x + y)
                player.position.setZ(player.position.z + x)

            }
            // // esquerda
            else if (event.key == 'MediaTrackPrevious') {
                const player = this.myRef.current.object3D
                var x = 0.1 * Math.cos(angle.y * Math.PI / 180)
                var y = 0.1 * Math.sin(angle.y * Math.PI / 180)
                var pos = player.position
                player.position.setX(player.position.x - x)
                player.position.setZ(player.position.z + y)
            }
            // // direita
            else if (event.key == 'MediaTrackNext') {
                const player = this.myRef.current.object3D
                var x = 0.1 * Math.cos(angle.y * Math.PI / 180)
                var y = 0.1 * Math.sin(angle.y * Math.PI / 180)
                var pos = player.position
                player.position.setX(player.position.x + x)
                player.position.setZ(player.position.z - y)
            }

            // console.log("key:" + event.key + " - code: " + event.code + " - keyCode: " + event.keyCode)
        })
    }

    handleClick(evt, hoverChangeColor) {
        debugger
        this.refs.notebook.showCable();
        evt.target.setAttribute("color", "red")
    }

    render() {
        return (
            <a-scene stats>
                <a-assets>
                    <img id="notebook" src={notebook}></img>
                    <img id="arrow" src={arrow}></img>
                    <video id={videoId} src="https://ucarecdn.com/bcece0a8-86ce-460e-856b-40dac4875f15/"></video>
                </a-assets>
                <a-entity ref={this.myRef} position="0 0 0">
                    <a-camera id="camera" ><a-cursor color="red"></a-cursor></a-camera>
                    {/* <a-camera id="camera" ><a-cursor fuse={true} fuse-timeout={2000} color="red"></a-cursor></a-camera> */}
                </a-entity>
                <Plane />
                <Lab />
                {/* mesas */}
                <a-entity scale="1 1.130 1" position="0 0 0"><Stand /></a-entity>
                <a-entity scale="1 1.130 1" position="-5 0 0"><Stand /></a-entity>
                <a-entity scale="1 1.130 1" position="5 0 0"><Stand /></a-entity>
                {/* pcs */}
                <a-entity position="0 1 0"><Pc /></a-entity>
                <a-entity position="0 1 3"><Pc /></a-entity>
                <a-entity position="5 1 0"><Pc /></a-entity>
                <a-entity position="5 1 3"><Pc /></a-entity>
                <a-entity position="5 1 -3"><Pc /></a-entity>
                <a-entity position="-5 1 3"><Pc /></a-entity>
                {/* printer 3D */}
                {/* <a-entity position="-5 1 -3"><Printer /></a-entity> */}
                <a-entity rotation="0 90 0" position="-5 1 -3"><ToolPrinter /></a-entity>
                <a-entity rotation="0 90 0" position="0 1 -3"><ToolPrinter2 /></a-entity>

                <Monitor />

            </a-scene>
        );
    }
}

export default Scene;
