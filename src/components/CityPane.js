import React, {Component} from "react";
import PropTypes from "prop-types";

class CityPane extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: props.city.Temperature.Value > props.filter
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.city.Temperature.Value > nextProps.filter && !this.state.show) {
            this.setState({show: true});
        } else if (this.props.city.Temperature.Value < nextProps.filter && this.state.show) {
            this.setState({show: false});
        }
    }

    shouldComponentUpdate(nextProps) {
        return (this.props.city.Temperature.Value > nextProps.filter && !this.state.show)
            || (this.props.city.Temperature.Value < nextProps.filter && this.state.show);
    }

    render() {
        const {city} = this.props;
        const icon = ICONS[city.WeatherIcon];
        if (!this.state.show) {
            return null;
        }
        return (
            <div className="animated flipInX city-pane">
                <div className="city-name">
                    <div className="name">{city.cityName}</div>
                    <i className="icon-close" onClick={() => this.props.onRemoveCity(city.cityId)}/>
                </div>
                <div className="temperature">
                    <i className={`icon-${icon}`} title={city.IconPhrase}/>
                    <span>{city.Temperature.Value} &deg;C</span>
                </div>
                <div>
                    <div>Ветер: {city.Wind.Speed.Value} км/ч</div>
                    {/* К сожадение данные статичны, так как accuweather почему-то не отдает данные по давлению  */}
                    <div>Давление: 750 мм</div>
                </div>
            </div>

        );
    }
}

CityPane.propTypes = {
    city: PropTypes.object.isRequired,
    onRemoveCity: PropTypes.func.isRequired
};

export default CityPane;

const ICONS = {
    1: 'wi-day-sunny',
    2: 'wi-day-sunny-overcast',
    3: 'wi-day-sunny',
    4: 'wi-day-cloudy',
    5: 'wi-day-haze',
    6: 'wi-cloud',
    7: 'wi-cloudy',
    8: 'wi-cloudy',
    11: 'wi-fog',
    12: 'wi-showers',
    13: 'wi-day-rain-mix',
    14: 'wi-day-showers',
    15: 'wi-storm-showers',
    16: 'wi-day-sleet-storm',
    17: 'wi-day-sleet-storm',
    18: 'wi-rain',
    19: 'wi-snow',
    20: 'wi-day-snow-wind',
    21: 'wi-day-snow-wind',
    22: 'wi-snow',
    23: 'wi-day-snow-wind',
    24: 'wi-snowflake-cold',
    25: 'wi-sleet',
    26: 'wi-snow-wind',
    29: 'wi-snow-wind',
    30: 'wi-fire',
    31: 'wi-snowflake-cold',
    32: 'wi-windy',
    33: 'wi-night-clear',
    34: 'wi-night-partly-cloudy',
    35: 'wi-night-partly-cloudy',
    36: 'wi-night-alt-partly-cloudy',
    37: 'wi-night-fog',
    38: 'wi-night-cloudy',
    39: 'wi-night-alt-showers',
    40: 'wi-night-alt-showers',
    41: 'wi-night-alt-sleet-storm',
    42: 'wi-night-alt-sleet-storm',
    43: 'wi-night-alt-snow',
    44: 'wi-night-alt-snow'
};