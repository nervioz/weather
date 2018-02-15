import React, {Component} from "react";
import PropTypes from "prop-types";

class Filter extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        const initValue = '-20';
        this.state = {value: initValue};
        this.props.changeFilter(initValue);
    }

    handleChange(event) {
        let target = event.target;
        let value = event.target.value;
        let min = target.getAttribute('min');
        let max = target.getAttribute('max');
        let range = max - min;
        let position = ((value - min) / range) * 100;
        this.setState({bubbleStyle: {left: `calc(${position}% )`}, value});
        this.props.changeFilter(value);
    }

    render() {
        return (
            <div className="city-filter">
                <span>Где сейчас теплее, чем</span>
                <input value={this.state.value} onChange={this.handleChange} type="range" min="-20" max="45"/>
                <div className="range-bubble"
                     style={this.state.bubbleStyle}>{this.state.value > 0 ? '+' + this.state.value : this.state.value} &deg;C
                </div>
            </div>
        );
    }
}

Filter.propTypes = {
    changeFilter: PropTypes.func.isRequired
};

export default Filter;
