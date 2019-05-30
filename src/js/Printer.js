import React, { Component } from 'react';
import 'aframe';

class Printer extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
        this.ref = React.createRef();
    }

    handleClick(ev) {
        const player = this.ref.current
        if (player.isPlaying) {
            player.pause()
        } else {
            player.play()
        }
        console.log("clique")
        // player.translateX(0.1);

        // this.setState({
        //     animation: "property: position; from: 0.1 0 0; to: -0.1 0 0; dur: 2000; easing: linear;  loop: true; enabled: true"
        // })

        // evt.target.setAttribute("color", "red")
    }

    render() {
        return ([
            <a-box onClick={this.handleClick} position="-0.00317 0.188 -0.176" material="" scale="0.49 0.3 0.068" geometry="" color="#313131"></a-box>,
            <a-box onClick={this.handleClick} position="0 0 0" material="" scale="0.5 0.04 0.42" geometry="" color="red"></a-box>,
            <a-box onClick={this.handleClick} position="0.225 0.36874 0" material="" scale="0.05 0.04 0.33" geometry="" color="red"></a-box>,
            <a-box onClick={this.handleClick} position="-0.225 0.36874 0" material="" scale="0.05 0.04 0.33" geometry="" color="red"></a-box>,
            <a-box onClick={this.handleClick}  position="0 0.029 0" material="" scale="0.5 0.03 0.42" geometry="" color="#252525"></a-box>,
            <a-box onClick={this.handleClick} position="0.225 0.33736 0" material="" scale="0.05 0.03 0.42" geometry="" color="#252525"></a-box>,
            <a-box onClick={this.handleClick} position="-0.225 0.33736 0" material="" scale="0.05 0.03 0.42" geometry="" color="#252525"></a-box>,
            <a-box onClick={this.handleClick} position="0  0.33736 0.195" material="" scale="0.49 0.03 0.028" geometry="" color="#252525"></a-box>,
            <a-box onClick={this.handleClick} position="0  0.33736 -0.195" material="" scale="0.49 0.03 0.028" geometry="" color="#252525"></a-box>,
            
            <a-cylinder radius="0.5" rotation="0 0 90" position="0 0.33736 0.04" material="color: #252525" scale="0.015 0.49 0.015" />,
            <a-cylinder radius="0.5" rotation="0 0 90" position="0 0.33736 -0.04" material="color: #252525" scale="0.015 0.49 0.015" />,
            <a-box onClick={this.handleClick} position="0 0.08 0" material="" scale="0.2 0.02 0.2" geometry="" color="blue"></a-box>,

            <a-entity onClick={this.handleClick} ref={this.ref} animation="property: position; from: 0.1 0 0; to: -0.1 0 0; dur: 2000; easing: linear; loop: true;">
                
                <a-box position="0 0.33304 0" material="" scale="0.15 0.15 0.15"  geometry="" color="gray" ></a-box>
                <a-cylinder position="0 0.188 0" color="white" scale="0.005 0.13 0.005"></a-cylinder>
            </a-entity>,
            //    hastes
            //    <a-box position="0.21894 0.188 0.17799" material="" scale="0.06 0.4 0.06011" geometry="" color="#313131"></a-box>,

            <a-cylinder onClick={this.handleClick} position="0.210 0.188 0.170" color="#313131" theta-start="-45" theta-length="180" side="double" scale="0.04 0.3 0.04"></a-cylinder>,
            <a-cylinder onClick={this.handleClick} position="-0.210 0.188 0.170" color="#313131" theta-start="240" theta-length="180" side="double" scale="0.04 0.3 0.04"></a-cylinder>,
            <a-cylinder onClick={this.handleClick} rotation="0 0 90" position="0 0.35 0.165" color="red" material="" theta-start="0" geometry="" theta-length="90" side="double" scale="0.038 0.5 0.042"></a-cylinder>,
            <a-cylinder onClick={this.handleClick} rotation="0 180 90" position="0 0.35 -0.165" color="red" material="" theta-start="0" geometry="" theta-length="90" side="double" scale="0.038 0.5 0.042"></a-cylinder>
        ]);
    }
}
//<a-entity position="-5.153 1.25523 0.659" >
export default Printer;