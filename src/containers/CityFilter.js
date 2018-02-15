import {changeFilter} from "../actions/Actions";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import Filter from "../components/Filter";

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({changeFilter}, dispatch)
};

export default connect(null, mapDispatchToProps)(Filter)
