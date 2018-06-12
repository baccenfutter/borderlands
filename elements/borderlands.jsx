import React from 'react';
import Countdown from './countdown'

const nextEvent = new Date('August 17, 2018 18:00:00');

export default class Borderlands extends React.Component {
    render() {
        return (
            <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
                <div className="teaser w3-display-middle w3-text-white w3-text-shadow w3-animate-opacity w3-center">
                    <div className="w3-text-white">
                        <div className="claim">
                            <i className="fa fa-globe w3-xlarge" ref="about"></i>
                            <i className="fa fa-tree w3-xlarge" ref="nature"></i>
                            <i className="fa fa-users w3-xlarge" ref="people"></i>
                            <i className="fa fa-handshake-o w3-xlarge" ref="social"></i>
                            <i className="fa fa-glass w3-xlarge" ref="drinks"></i>
                            <i className="fa fa-headphones w3-xlarge" ref="music"></i>
                            <i className="fa fa-signal w3-xlarge" ref="party"></i>
                            <i className="fa fa-cloud-upload w3-xlarge" ref="drugs"></i>
                            <i className="fa fa-unlock w3-xlarge" ref="unlock"></i>
                            <i className="fa fa-wheelchair-alt w3-xlarge" ref="abfahrt"></i>
                        </div>

                        <hr className="w3-border-white" />

                        <div className="w3-container w3-hide-small">
                            <h1 className="w3-jumbo">BORDERLANDS</h1>
                        </div>
                        <div className="w3-container w3-hide-medium w3-hide-large">
                            <h1 className="w3-jumbo">BORDER</h1>
                            <h1 className="w3-jumbo">LANDS</h1>
                        </div>

                        <hr className="w3-border-white" style={{ margin: 0 }} />

                        <Countdown date={nextEvent} />

                        <a href="https://paypal.me/pools/c/85cRTGYsJA" target="_blank"
                          className="w3-btn w3-round-xlarge w3-white w3-hover-teal w3-border-teal">
                            <strong>
                                <i className="fa fa-cc-paypal w3-large"></i> S P E N D E N
                            </strong>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}