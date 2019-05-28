import React, { Component } from 'react';
import 'aframe'
import Plane from './Plane'
import Stand from './Stand'
import Monitor from './Monitor'
import Pc from './Pc'
import Lab from './Lab'

class Scene extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
        var player = document.querySelector("a-camera")
        window.addEventListener("keydown", (e) => {
          if (event.key == 'MediaFastForward') {
            var angle = player.getAttribute("rotation")
            var x = 1 * Math.cos(angle.y * Math.PI / 180)
            var y = 1 * Math.sin(angle.y * Math.PI / 180)
            var pos = player.getAttribute("position")
            pos.x -= y;
            pos.z -= x;
            player.setAttribute("position", pos);
          }
        })

        // document.addEventListener('keydown', function (event) {
        //     let cam = document.querySelector('[camera]');
        //     let pos = cam.getAttribute('position');
        //     //frente
        //     if (event.key == 'MediaFastForward') {
        //         pos.z--;
        //     }
        //     //traz
        //     if (event.key == 'MediaRewind') {
        //         pos.z++;
        //     }
        //     // esquerda
        //     if (event.key == 'MediaTrackPrevious') {
        //         pos.x--;
        //     }
        //     // direita
        //     if (event.key == 'MediaTrackNext') {
        //         pos.x++;
        //     }
        //     cam.setAttribute('position', pos);

        //     // alert("key:" + event.key + " - code: " + event.code + " - keyCode: " + event.keyCode)
        //     console.log("key:" + event.key + " - code: " + event.code + " - keyCode: " + event.keyCode)
        // }, false);
    }
    render() {
        return (
            <a-scene stats>
                <a-camera><a-cursor fuse={true} fuse-timeout={2000} color="red"></a-cursor></a-camera>
                <Plane />
                <Lab />
                {/* mesas */}
                <a-entity scale="1 1 1" position="0 0 0"><Stand /></a-entity>
                <a-entity scale="1 1 1" position="-5 0 0"><Stand /></a-entity>
                <a-entity scale="1 1 1" position="5 0 0"><Stand /></a-entity>
                {/* pcs */}
                <a-entity position="0 1 0"><Pc /></a-entity>
                <a-entity position="0 1 3"><Pc /></a-entity>
                <a-entity position="0 1 -3"><Pc /></a-entity>
                <a-entity position="5 1 0"><Pc /></a-entity>
                <a-entity position="5 1 3"><Pc /></a-entity>
                <a-entity position="5 1 -3"><Pc /></a-entity>
                <a-entity position="-5 1 3"><Pc /></a-entity>
                <a-entity position="-5 1 -3"><Pc /></a-entity>

                <Monitor />
            </a-scene>
        );
    }
}

export default Scene;
