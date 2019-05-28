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
        window.addEventListener("keydown", (e) => {

            const player = this.myRef.current.object3D
            //var angle = player.rotation
            var angle = document.getElementById('camera').getAttribute('rotation')
            // var x = 1 * Math.cos(angle.y * Math.PI / 180)
            // var y = 1 * Math.sin(angle.y * Math.PI / 180)
            // var pos = player.position
            // player.position.setX(player.position.x - y)
            // player.position.setZ(player.position.z - x)

            if (event.key == 'i') {
                var x = 0.1 * Math.cos(angle.y * Math.PI / 180)
                var y = 0.1 * Math.sin(angle.y * Math.PI / 180)
                var pos = player.position
                player.position.setX(player.position.x - y)
                player.position.setZ(player.position.z - x)

            }
            //traz
            if (event.key == 'k') {
                var x = 0.1 * Math.cos(angle.y * Math.PI / 180)
                var y = 0.1 * Math.sin(angle.y * Math.PI / 180)
                var pos = player.position
                player.position.setX(player.position.x + y)
                player.position.setZ(player.position.z + x)

            }
            // // esquerda
            if (event.key == 'j') {
                var x = 0.1 * Math.cos(angle.y * Math.PI / 180)
                var y = 0.1 * Math.sin(angle.y * Math.PI / 180)
                var pos = player.position
                player.position.setX(player.position.x - x)
                player.position.setZ(player.position.z + y)
            }
            // // direita
            if (event.key == 'l') {
                var x = 0.1 * Math.cos(angle.y * Math.PI / 180)
                var y = 0.1 * Math.sin(angle.y * Math.PI / 180)
                var pos = player.position
                player.position.setX(player.position.x + x)
                player.position.setZ(player.position.z - y)
            }


            // let pos = player.position;
            // //frente
            // if (event.key == 'i') {
            //     pos.z-=0.1;
            // }
            // //traz
            // if (event.key == 'k') {
            //     pos.z+=0.1;
            // }
            // // esquerda
            // if (event.key == 'j') {
            //     pos.x-=0.1;
            // }
            // // direita
            // if (event.key == 'l') {
            //     pos.x+=0.1;
            // }
            // player.position.setX(pos.x)
            // player.position.setY(pos.y)
            // player.position.setZ(pos.z)

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
                <a-entity ref={this.myRef} position="0 0 0">
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
