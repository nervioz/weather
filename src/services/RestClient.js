import * as axios from "axios";

class RestClient {

    _API_TOKEN = 'zAA9aAnqGJF6VZ2B34zq66upRBImJLPj';

    _LOCATION_API = '/locations/v1/cities/autocomplete';
    _FORECAST_API = '/forecasts/v1/hourly/1hour/';

    _LANGUAGE = 'ru-Ru';

    _axiosInstance = axios.create({
        baseURL: 'http://dataservice.accuweather.com'
    });

    forecast(cityId) {
        const params = {
            details: true,
            metric: true
        };
        return this._get(this._FORECAST_API + cityId, params);
    }

    search(query) {
        const params = {
            q: query
        };
        return this._get(this._LOCATION_API, params);
    }

    _get(url, params) {
        const options = {
            method: 'GET',
            url,
            params
        };
        return this._doRequest(options);
    }

    _doRequest(options) {
        options.params.apikey = this._API_TOKEN;
        options.params.language = this._LANGUAGE;
        return this._axiosInstance(options).catch(() => {
            alert('Сетевая ошибка, скорей всего нужен новый API KEY для accuweather');
        });
    }
}

export default new RestClient();