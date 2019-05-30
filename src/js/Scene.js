import React, { Component } from 'react';
import 'aframe'
import Plane from './Plane'
import Stand from './Stand'
import Monitor from './Monitor'
import Pc from './Pc'
import Printer from './Printer'
import Lab from './Lab'

const videoId = "video-tag"
class Scene extends Component {
    constructor(props) {
        super(props);

        this.myRef = React.createRef();

    }


    componentDidMount() {
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

            console.log("key:" + event.key + " - code: " + event.code + " - keyCode: " + event.keyCode)
        })
    }
    render() {
        return (
            <a-scene stats>
               <a-assets>
                    <video id={videoId} src="https://ucarecdn.com/bcece0a8-86ce-460e-856b-40dac4875f15/"></video>
                </a-assets>
                <a-entity ref={this.myRef} position="0 0 0">
                    <a-camera id="camera" ><a-cursor fuse={true} fuse-timeout={2000} color="red"></a-cursor></a-camera>
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
                <a-entity position="0 1 -3"><Pc /></a-entity>
                <a-entity position="5 1 0"><Pc /></a-entity>
                <a-entity position="5 1 3"><Pc /></a-entity>
                <a-entity position="5 1 -3"><Pc /></a-entity>
                <a-entity position="-5 1 3"><Pc /></a-entity>
                {/* printer 3D */}
                {/* <a-entity position="-5 1 -3"><Printer /></a-entity> */}
                <a-entity rotation="0 90 0" position="-5 1 -3"><Printer /></a-entity>

            
                <Monitor />
            </a-scene>
        );
    }
}

export default Scene;
