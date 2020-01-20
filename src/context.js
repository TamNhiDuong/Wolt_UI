import React, { Component } from 'react';

//load json data
import data from './JSONdata/data.json';
const loadData = JSON.parse(JSON.stringify(data.restaurants));

const FoodContext = React.createContext();

class FoodProvider extends Component {
    state = {
        items: [],
        loading: true,
        sortedItems: [],
    };
    componentDidMount() {
        this.setState({ items: loadData, loading: false});
    }
    render() {
        return (
            <FoodContext.Provider value={{...this.state}}>
                {this.props.children}
            </FoodContext.Provider>
        );
    }
}
const FoodConsumer = FoodContext.Consumer;

export { FoodProvider, FoodConsumer, FoodContext };