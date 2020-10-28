import React from 'react';
import SearchBar from './search/SearchBar';

class App extends React.Component {
    onSearchSubmit = (formValues) => {
        console.log('onSearchSubmit called from App component...');
        console.log(formValues);
    };
    render() {
        return (
            <div>
                <h1>Search for a city!</h1>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
