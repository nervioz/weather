import React, {Component} from "react";
import PropTypes from "prop-types";

class SearchResultList extends Component {

    render() {
        return (
            <ul className="search-result">
                {
                    this.props.searchResult.map((item, index) => {
                        return <li key={item.Key} onClick={() => this.props.onSelectCity(item)} className={`${index === this.props.selectedIndex ? 'marked' : ''}`}>
                            {item.LocalizedName}, <span className="area">{item.AdministrativeArea.LocalizedName}</span>
                        </li>
                    })
                }
            </ul>
        );
    }
}

SearchResultList.propTypes = {
    searchResult: PropTypes.array.isRequired,
    onSelectCity: PropTypes.func.isRequired,
    selectedIndex: PropTypes.number
};

export default SearchResultList;