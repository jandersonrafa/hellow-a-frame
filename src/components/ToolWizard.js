import React, { Component } from 'react';
import 'aframe'
import PropTypes from 'prop-types';
import StepConfig from '../dto/StepConfig'

class ToolWizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stepVisible: 0,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(evt, stepNumber, action) {
        evt.target.setAttribute("color", "red")
        this.setState({ stepVisible: stepNumber });
        if (action) {
            action()
        }
    }

    createSteps() {
        let table = []

        // Outer loop to create parent
        for (let i = 0; i < this.props.steps.length; i++) {

            table.push(<a-entity>
                {this.state.stepVisible == i ?
                    <a-entity> <a-text color="black" align="center" alpha-test="2" baseline="center" scale="0.5 0.5" width="3" position="0 0 0.03"
                        font="aileronsemibold"
                        value={this.props.steps[i].content}></a-text>
                        {this.props.steps[i].button1 ?
                            <a-box class="hoverChangeColor" onClick={(e) => {
                                const stepNumber = i + 1
                                this.handleClick(e, stepNumber, this.props.steps[i].button1.action)
                            }} scale="0.4 0.15 0.05" align="left" baseline="bottom" position="-0.25 -0.4 0.01">
                                <a-text color="black" align="center" baseline="center" width="5" position="0 0 0.5" value={this.props.steps[i].button1.name} ></a-text>
                            </a-box>
                            : null}
                        {this.props.steps[i].button2 ?
                            <a-box onClick={(e) => {
                                const stepNumber = i + 1
                                this.handleClick(e, stepNumber, this.props.steps[i].button2.action)
                            }} scale="0.4 0.15 0.05" align="left" baseline="bottom" position="0.25 -0.4 0.01">
                                <a-text color="black" align="center" baseline="center" width="5" position="0 0 0.5" value={this.props.steps[i].button2.name} ></a-text>
                            </a-box>
                            : null} </a-entity>
                    : null}</a-entity>
            )
        }
        return table
    }

    render() {
        return (
            [
                <a-box opacity="0.9" color="#4CC3D9" width="1" height="1" depth="0.05" position="0 1 0">
                    <a-text color="black" align="center" alpha-test="2" baseline="top" width="2" position="0 0.48 0.03"
                        font="aileronsemibold"
                        value={this.props.title}></a-text>
                    {this.createSteps()}


                </a-box>
            ]
        );
    }
}

ToolWizard.propTypes = {
    title: PropTypes.string.isRequired,
    steps: PropTypes.arrayOf(PropTypes.instanceOf(StepConfig)).isRequired
};

export default ToolWizard;