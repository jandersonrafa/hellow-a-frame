import React, { Component } from 'react';
import AFRAME from 'aframe';
import Notebook from '../components/Notebook'
import Cable from '../components/Cable'
import Printer from '../components/Printer'
import ToolWizard2 from '../components/ToolWizard2'
import StepAction from '../components/StepAction'
import StepConfig from '../dto/StepConfig'

class ToolPrinter2 extends Component {
    constructor(props) {
        super(props);
        this.toolClick = this.toolClick.bind(this)
        this.showNotebook = this.showNotebook.bind(this)
        this.showCable = this.showCable.bind(this)
        this.showStep = this.showStep.bind(this)
        this.playPrinter = this.playPrinter.bind(this)
        this.state = {
            isVisibleCable: false,
            isVisibleNotebook: false,
            isVisibleWizard: false,
            isVisibleInfo: false,
            stepVisible: 1
        }
        this.ref = React.createRef();
    }

    showCable() {
        this.setState({ isVisibleCable: true });
    }
    playPrinter() {
        this.ref.current.playPrinter()
    }
    hideCable() {
        this.setState({ isVisibleCable: false });
    }
    showStep(stepNumber) {
        this.setState({ stepVisible: stepNumber });
        // TODO remover chave duplicada para cada step
        this.setState({ isVisibleWizard: false });

    }

    toolClick(evt) {
        this.ref.current.stopPrinter()
        this.setState({ isVisibleWizard: true });
        this.setState({ stepVisible: 0 });
    }

    showNotebook() {
        this.setState({ isVisibleNotebook: true });
    }
    
    showCable() {
        this.setState({ isVisibleCable: true });
    }

    render() {
        return (
            <a-entity><Printer ref={this.ref}></Printer>
                {this.state.stepVisible == 1 ? <a-entity position="0 0.2 0">
                    <StepAction
                        boxClick={this.toolClick}
                        boxWidth={0.510}
                        boxHeight={0.450}
                        boxDepth={0.430}
                        infoShowHover={true}
                        title="Clique para conhecer \n o equipamento"
                    >
                    </StepAction>
                </a-entity> :null}
                {this.state.stepVisible == 2 ? <a-entity position="0.7 0.2 0">
                    <StepAction
                        boxClick={() => { this.showNotebook(3); this.showStep(3);}}
                        boxWidth={0.410}
                        boxHeight={0.350}
                        boxDepth={0.330}
                        title="Colocar o notebook na mesa"
                    >
                    </StepAction>
                </a-entity> :null}
                {this.state.stepVisible == 3 ? <a-entity position="0.42 0 -0.1">
                    <StepAction
                        boxClick={() => { this.showCable();  this.showStep(4)}}
                        boxWidth={0.35}
                        boxHeight={0.04}
                        boxDepth={0.04}
                        title="Conecte o notebook\n na impressora\n\n"
                    >
                    </StepAction>
                </a-entity> :null}
                {this.state.stepVisible == 4 ? <a-entity position="0.7 0.2 0">
                    <StepAction
                        boxClick={() => { this.showNotebook(3); this.showStep(5);}}
                        boxWidth={0.410}
                        boxHeight={0.350}
                        boxDepth={0.330}
                        title="Clique em fatiar"
                    >
                    </StepAction>
                </a-entity> :null}
                {this.state.stepVisible == 5 ? <a-entity position="0.7 0.2 0">
                    <StepAction
                        boxClick={() => { this.playPrinter(); this.showStep(6);}}
                        boxWidth={0.410}
                        boxHeight={0.350}
                        boxDepth={0.330}
                        title="Clique em imprimir"
                    >
                    </StepAction>
                </a-entity> :null}
                {/* <a-box  class="hoverChangeColor"  onClick={this.toolClick} rotation="90 0 0" scale="0.4 0.2 0.01" align="left" baseline="bottom"  position="0 0 0.50">
                <a-text color="black" align="center" baseline="top" width="7"
                        font="aileronsemibold"
                        rotation="180 0 0"
                        value="Impressora 3D" value="Testar" position ="0 0 -0.5"></a-text>
                </a-box> */}


                {/* <a-plane class="hoverChangeColor" color="white" rotation="-90 0 0" position="0 0 0.40" width="0.5" height="0.2">
                <a-text value="Testar" position ="0 0 -0.3"></a-text>
                    </a-plane>, */}
                {this.state.isVisibleWizard ? <a-entity position="0 0 -0.4"><ToolWizard2 steps={[new StepConfig("Está é uma Impressora 3D\n que serve para criar fisicamente\n modelos lógicos", { name: "Simular", action: () => { this.showStep(2)}}, { name: "Sair" })]} title="Impressora 3D" /></a-entity> : null}
                <a-entity position="0.41 0 -0.105">{this.state.isVisibleCable ? <Cable /> : null}</a-entity>
                <a-entity position="0.76 0 -0.105">{this.state.isVisibleNotebook ? <Notebook /> : null}</a-entity>
            </a-entity>
        );
    }
}

export default ToolPrinter2;