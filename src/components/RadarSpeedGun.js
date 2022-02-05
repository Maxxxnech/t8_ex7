import React, {PureComponent } from "react";
import SpeedInput from "./SpeedInpit";
import speedConverter from "./speedConverter";
import Display from "./Display";

const SPEED_LIMIT = speedConverter(60, 'km/h');

export default class RadarSpeedGun extends PureComponent {
    constructor(props){
        super(props);
        this.state = {speed: 0, units: 'km/h'}
        this.handleSpeedChange = this.handleSpeedChange.bind(this);
    }

    render(){
        const {speed, units} = this.state;
        const calculatedSpeeds = speedConverter(speed, units);
        return (
            <div>
                <Display speed={speed} units={units} limit={SPEED_LIMIT}/>
                <SpeedInput speed={calculatedSpeeds['km/h']} handleChange={this.handleSpeedChange} units='km/h'/>
                <SpeedInput speed={calculatedSpeeds['mph']} handleChange={this.handleSpeedChange} units='mph'/>
            </div>
        )
    }
    
    handleSpeedChange(e, units){
        this.setState({speed: e.target.value, units})
    }
}
