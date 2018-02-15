import React, {Component} from "react";
import {debounce} from "../services/Utils";
import SearchResult from "../containers/SearchResult";
import PropTypes from "prop-types";

class SearchCity extends Component {

    componentWillReceiveProps(nextProps) {
        this.setState({value: nextProps.selectedCity ? nextProps.selectedCity.LocalizedName : this.state.value});
    }

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.search = debounce(props.searchingFn, 1000);
    }

    handleChange(event) {
        const value = event.target.value;
        this.search(value);
        this.setState({value})
    }

    onFocus() {
        this.setState({value: ''});
    }

    onKeyDown(event) {
        let key;
        switch (event.keyCode ) {
            case 40:
                key = 'DOWN';
                break;
            case 38:
                key = 'UP';
                event.preventDefault();
                break;
            case 13:
                key = 'ENTER';
                break;
            default:
                return;
        }
        this.props.markCity(key);
    }

    render() {
        return (
            <div className="search-city">
                <input value={this.state.value} className="search" onFocus={this.onFocus} onChange={this.handleChange} onKeyDown={this.onKeyDown}/>
                <SearchResult searchResult={this.props.searchResult}/>
            </div>
        );
    }
}

SearchCity.propTypes = {
    closeSearchResult: PropTypes.func.isRequired,
    selectedCity: PropTypes.object,
    searchingFn: PropTypes.func.isRequired,
    markCity: PropTypes.func.isRequired
};

export default SearchCity;