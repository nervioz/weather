import RestClient from "../services/RestClient";

export const NEW_SEARCH_RESULT = 'NEW_SEARCH_RESULT';

export const SELECT_CITY = 'SELECT_CITY';
export const MARK_CITY_BY_KEYBOARD = 'MARK_CITY_BY_KEYBOARD';
export const ADD_CITY = 'ADD_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';

export const ADD_FILTER_VALUE = 'ADD_FILTER_VALUE';

const newSearchResult = (result) => {
    return {type: NEW_SEARCH_RESULT, result};
};

const addCityToDashBoard = (city) => {
    return {type: ADD_CITY, city};
};

export const selectCity = (city) => (dispatch) => {
    dispatch({type: SELECT_CITY, city});
};

export const onSelectCity = (city) => (dispatch) => {
    dispatch(selectCity(city));
    dispatch(newSearchResult([]));
};


export const searchCity = (query) => (dispatch) => {
    dispatch(selectCity(null));
    if (!query) {
        dispatch(newSearchResult([]));
        return;
    }
    return RestClient.search(query).then(resp => {
        let searchResult = resp.data.filter(item => {
            return item.Country.ID === 'RU';
        });
        dispatch(newSearchResult(searchResult));

    });
};

export const addCity = () => (dispatch, getState) => {
    const selectedCity = getState().searching.selectedCity;
    if (!selectedCity) {
        return;
    }
    const {LocalizedName, Key} = selectedCity;
    dispatch({type: SELECT_CITY, city: null});
    return RestClient.forecast(Key).then(resp => {
        dispatch(addCityToDashBoard({...resp.data[0], cityId: Key, cityName: LocalizedName}));
    });
};

export const removeCity = (cityId) => (dispatch) => {
    dispatch({type: REMOVE_CITY, cityId});
};

export const changeFilter = (filter) => (dispatch) => {
    dispatch({type: ADD_FILTER_VALUE, filter});
};

export const markCity = (key) => (dispatch, getState) => {
    const searchResult = getState().searching.searchResult;
    const oldIndex = getState().searching.markedSearchResultIndex;
    let length = searchResult.length;
    let newIndex;

    if (key === 'ENTER') {
        dispatch(addCity());
        dispatch(closeSearchResult());
        return;
    }

    if (oldIndex == null) {
        if (key === 'DOWN') {
            newIndex = 0;
        } else if (key === 'UP') {
            newIndex = length - 1;
        }
    } else {
        if (key === 'DOWN') {
            newIndex = oldIndex + 1 < length ? oldIndex + 1 : 0;
        } else if (key === 'UP') {
            newIndex = oldIndex - 1 >= 0 ? oldIndex - 1 : length - 1;
        }
    }
    dispatch({type: MARK_CITY_BY_KEYBOARD, newIndex});
    dispatch(selectCity(searchResult[newIndex]));
};

export const closeSearchResult = () => (dispatch) => {
    dispatch(newSearchResult([]));
};