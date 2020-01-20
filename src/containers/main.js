import React, { Component } from 'react';

import Header from '../containers/header/header';
import SearchBar from '../components/searchBar/searchBar';
import ItemList from '../components/itemList/itemList';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header>
                    <SearchBar />
                </Header>
                <ItemList />
            </div>
        )
    }
}