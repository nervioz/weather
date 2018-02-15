import {connect} from 'react-redux'
import {removeCity} from "../actions/Actions";
import {bindActionCreators} from "redux";
import CityDashboard from "../components/CityDashboard";

const mapStateToProps = (state) => ({
    citiesIdsList: state.dashboard.citiesIdsList,
    cities: state.dashboard.citiesById,
    filter: state.dashboard.filter
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({removeCity}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CityDashboard)
