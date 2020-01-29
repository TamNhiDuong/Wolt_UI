import React, { Component } from 'react';

import Header from '../containers/header/header';
import Caption from '../components/caption/caption';
import ItemList from '../components/itemList/itemList';

//load json data
import data from '../JSONdata/data.json';
const loadData = JSON.parse(JSON.stringify(data.restaurants));

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            items: [],
            sortedItems: [],
        };
    }

    componentDidMount() {
        const cloneData = [...loadData];
        const sortedData = cloneData.sort(function (a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        this.setState({
            items: loadData,
            loading: false,
            sortedItems: sortedData,
        });
    }
 
    render() {
        return (
            <div>
                <Header>
                    <Caption />
                </Header>
               <ItemList 
               loading={this.state.loading}
               items={this.state.items}
               sortedItems={this.state.sortedItems}
               />
            </div>
        )
    }
}