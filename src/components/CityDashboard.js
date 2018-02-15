import React, {Component} from 'react';
import CityPane from "./CityPane";
import PropTypes from "prop-types";

class CityDashboard extends Component {
    render() {
        const cities = this.props.cities || {};
        const citiesIdsList = this.props.citiesIdsList || [];
        const {removeCity, filter} = this.props;
        return (
            <div className="city-dashboard">
                {
                    citiesIdsList.map(cityId => {
                        return <CityPane key={cityId} city={cities[cityId]} filter={filter} onRemoveCity={removeCity}/>
                    })
                }
            </div>
        );
    }
}

CityDashboard.propTypes = {
    cities: PropTypes.object.isRequired,
    citiesIdsList: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
    removeCity: PropTypes.func.isRequired
};


export default CityDashboard;