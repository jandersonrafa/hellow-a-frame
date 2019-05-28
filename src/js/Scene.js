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

        this.myRef = React.createRef();

    }


    componentDidMount() {
        var player = this.myRef.current

        //var player = this.myRef.current
        window.addEventListener("keydown", (e) => {
            let cam = document.querySelector('[camera]');
            let pos = cam.getAttribute('position');
            //frente
            if (event.key == 'MediaFastForward') {
                pos.z-=0.1;
            }
            //traz
            if (event.key == 'MediaRewind') {
                pos.z+=0.1;
            }
            // esquerda
            if (event.key == 'MediaTrackPrevious') {
                pos.x-=0.1;
            }
            // direita
            if (event.key == 'MediaTrackNext') {
                pos.x+=0.1;
            }
            cam.setAttribute('position', pos);
            console.log("key:" + event.key + " - code: " + event.code + " - keyCode: " + event.keyCode)
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


        // }, false);
    }
    render() {
        return (
            <a-scene stats>
                <a-entity  ref={this.myRef} position="0 0 0">
                    <a-camera id="camera" ><a-cursor fuse={true} fuse-timeout={2000} color="red"></a-cursor></a-camera>
                </a-entity>
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
