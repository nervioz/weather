import {connect} from 'react-redux'
import SearchResultList from "../components/SearchResultList";
import {onSelectCity} from "../actions/Actions";
import {bindActionCreators} from "redux";

const mapStateToProps = (state) => ({
    searchResult: state.searching.searchResult || [],
    selectedIndex: state.searching.markedSearchResultIndex

});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({onSelectCity }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultList)
