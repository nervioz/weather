import React, {Component} from 'react';
import CityBox from "./containers/CityBox";
import CityFilter from "./containers/CityFilter";
import Dashboard from "./containers/Dashboard";

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="controls">
                    <CityBox/>
                    <CityFilter/>
                </div>
                <Dashboard/>
            </div>
        );
    }
}

export default App;
