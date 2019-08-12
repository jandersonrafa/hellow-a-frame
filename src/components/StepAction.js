import React, { Component } from 'react';
import 'aframe'
import PropTypes from 'prop-types';

class StepAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stepVisible: 0,
            isVisibleInfo: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        let _this = this;
        let hoverStep = this.refs.hoverStep;
        hoverStep.addEventListener('mouseenter', function (evt) {
            if (evt.target.nodeName == 'A-BOX') {
                evt.target.setAttribute("color", "blue")
                _this.setState({ isVisibleInfo: true });
            }

        })
        hoverStep.addEventListener('mouseleave', function (evt) {
            if (evt.target.nodeName == 'A-BOX') {
                evt.target.setAttribute("color", "red")
                _this.setState({ isVisibleInfo: false });
            }
        })
    }
    handleClick(evt, stepNumber, action) {
        evt.target.setAttribute("color", "red")
        this.setState({ stepVisible: stepNumber });
        if (action) {
            action()
        }
    }

    render() {
        return (
            [
                <a-box
                    ref="hoverStep"
                    color="red"
                    width={this.props.boxWidth}
                    height={this.props.boxHeight}
                    depth={this.props.boxDepth}
                    onClick={this.props.boxClick}
                    opacity="0.4">
                </a-box>,
                <a-entity>{!this.props.infoShowHover || this.state.isVisibleInfo?
                    <a-plane
                        width="0.1"
                        height="0.1"
                        src="#arrow"
                        animation={"property: position; to: 0 " + ((this.props.boxHeight / 2) + 0.10) + " 0; loop: true; dur: 1000"}
                        position={"0 " + ((this.props.boxHeight / 2) + 0.2) + " 0"}
                        transparent="true">
                    </a-plane> : null}
                </a-entity>,
                <a-entity>{!this.props.infoShowHover || this.state.isVisibleInfo?
                    <a-text
                        align="center"
                        color="black"
                        value={this.props.title}
                        width="2"
                        position={"0 " + ((this.props.boxHeight / 2) + 0.4) + " 0"}
                    >
                    </a-text> : null}
                </a-entity>
            ]
        );
    }
}

StepAction.propTypes = {
    title: PropTypes.string.isRequired,
    boxWidth: PropTypes.number.isRequired,
    boxHeight: PropTypes.number.isRequired,
    boxDepth: PropTypes.number.isRequired,
    infoShowHover: PropTypes.bool.isRequired
};

StepAction.defaultProps = {
    infoShowHover: false
};
export default StepAction;