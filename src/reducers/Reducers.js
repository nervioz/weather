import {combineReducers} from 'redux'
import {
    NEW_SEARCH_RESULT, ADD_CITY, REMOVE_CITY,
    SELECT_CITY, ADD_FILTER_VALUE, MARK_CITY_BY_KEYBOARD
} from "../actions/Actions";

const searchingState = {
    searching: false,
    searchResult: [],
    selectedCity: null,
    markedSearchResultIndex: null
};

function searching(state = searchingState, action) {
    switch (action.type) {
        case NEW_SEARCH_RESULT:
            return {...state, searchResult: [...action.result], markedSearchResultIndex: null};
        case SELECT_CITY:
            return {...state, selectedCity: action.city};
        case MARK_CITY_BY_KEYBOARD:
            return {...state, markedSearchResultIndex: action.newIndex};
        default:
            return state
    }
}

const dashboardState = {
    citiesById: {},
    citiesIdsList: [],
    filter: 5
};

function dashboard(state = dashboardState, action) {
    switch (action.type) {
        case ADD_CITY:
            if (state.citiesById[action.city.cityId]) {
                return state;
            }
            return {
                ...state,
                citiesById: {
                    ...state.citiesById,
                    [action.city.cityId]: action.city
                },
                citiesIdsList: [...state.citiesIdsList, action.city.cityId]
            };
        case REMOVE_CITY:
            const tempCities = {...state.citiesById};
            delete tempCities[action.cityId];
            let newCitiesIdsList = [...state.citiesIdsList];
            const index = newCitiesIdsList.indexOf(action.cityId);
            newCitiesIdsList.splice(index, 1);
            return {
                ...state,
                citiesById: {...tempCities},
                citiesIdsList: [...newCitiesIdsList]
            };
        case ADD_FILTER_VALUE:
            return {
                ...state,
                filter: action.filter
            };
        default:
            return state
    }
}

const rootReducer = combineReducers({
    searching,
    dashboard
});

export default rootReducer