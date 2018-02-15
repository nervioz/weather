import React from "react";
import PropTypes from "prop-types";

const AddBtn = ({onAddClick, canAdd}) => (
    <i className={`add-button icon-plus ${canAdd ? '' : 'disable'}`} onClick={() => {
        if (canAdd) {
            onAddClick()
        }
    }}/>
);

AddBtn.propTypes = {
    canAdd: PropTypes.bool.isRequired,
    onAddClick: PropTypes.func.isRequired
};

export default AddBtn;