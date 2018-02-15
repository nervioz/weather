import React, {Component} from "react";
import AddBtn from "../components/AddBtn";
import SearchCity from "../components/SearchCity";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addCity, searchCity, markCity, closeSearchResult} from "../actions/Actions";
import PropTypes from "prop-types";

class CityBox extends Component {
    render() {
        return (
            <div className="city-box">
                <SearchCity selectedCity={this.props.selectedCity} searchingFn={this.props.searchCity} markCity={this.props.markCity} closeSearchResult={this.props.closeSearchResult}/>
                <AddBtn canAdd={!!this.props.selectedCity} onAddClick={this.props.addCity}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedCity: state.searching.selectedCity
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addCity, searchCity, markCity, closeSearchResult}, dispatch)
};

CityBox.propTypes = {
    selectedCity: PropTypes.object,
    addCity: PropTypes.func.isRequired,
    searchCity: PropTypes.func.isRequired,
    markCity: PropTypes.func.isRequired,
    closeSearchResult: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CityBox);