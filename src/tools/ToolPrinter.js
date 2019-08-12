import React, { Component } from 'react';
import AFRAME from 'aframe';
import Notebook from '../components/Notebook'
import Cable from '../components/Cable'
import Printer from '../components/Printer'
import ToolWizard from '../components/ToolWizard'
import StepConfig from '../dto/StepConfig'

class ToolPrinter extends Component {
    constructor(props) {
        super(props);
        this.toolClick = this.toolClick.bind(this)
        this.onNotebook = this.onNotebook.bind(this)
        this.state = {
            isVisibleCable: false,
            isVisibleBoxSelection: true,
            isVisibleNotebook: false,
            isVisibleWizard: false,
            isVisibleInfo: false,
        }
    }

    showCable() {
        this.setState({ isVisibleCable: true });
    }
    hideCable() {
        this.setState({ isVisibleCable: false });
    }

    toolClick(evt) {
        this.setState({ isVisibleBoxSelection: false });
        this.setState({ isVisibleWizard: true });
    }

    onNotebook() {
        this.setState({ isVisibleCable: true });
        this.setState({ isVisibleNotebook: true });
    }

    render() {
        return (
            <a-entity><Printer></Printer>
                {this.state.isVisibleBoxSelection ? <a-box class="hoverChangeColor"
                    onClick={this.toolClick}
                    rotation="0 0 0"
                    scale="0.510 0.450 0.430" opacity="0" align="left" baseline="bottom"
                    position="0 0.190 0">
                </a-box> : null}

                {/* <a-box  class="hoverChangeColor"  onClick={this.toolClick} rotation="90 0 0" scale="0.4 0.2 0.01" align="left" baseline="bottom"  position="0 0 0.50">
                <a-text color="black" align="center" baseline="top" width="7"
                        font="aileronsemibold"
                        rotation="180 0 0"
                        value="Impressora 3D" value="Testar" position ="0 0 -0.5"></a-text>
                </a-box> */}


                {/* <a-plane class="hoverChangeColor" color="white" rotation="-90 0 0" position="0 0 0.40" width="0.5" height="0.2">
                <a-text value="Testar" position ="0 0 -0.3"></a-text>
                    </a-plane>, */}
                {this.state.isVisibleWizard ? <a-entity position="0 0 -0.4"><ToolWizard steps={[new StepConfig("Está é uma Impressora 3D\n que serve para criar fisicamente\n modelos lógicos", {name:"Simular"}, {name:"Sair"}),
                new StepConfig("Ligue e conecte o notebook\n na impressora", {action: this.onNotebook, name:"Conectar"}), new StepConfig("Step 3"), new StepConfig("Step 4")]} title="Impressora 3D" /></a-entity> : null}
                <a-entity position="0.41 0 -0.105">{this.state.isVisibleCable ? <Cable /> : null}</a-entity>
                <a-entity position="0.76 0 -0.105">{this.state.isVisibleNotebook ? <Notebook /> : null}</a-entity>
            </a-entity>
        );
    }
}

export default ToolPrinter;