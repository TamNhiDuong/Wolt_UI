import React, { Component } from 'react';

import SectionTitle from '../sectionTitle/sectionTitle';
import Loading from '../loading/loading';
import CardItem from '../cardItem/cardItem';

import './itemList.css';

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doSort: true,
        };
    }
    sortData = () => {
        this.setState({ doSort: !this.state.doSort });
    }
    render() {
        let { loading, items, sortedItems } = this.props;
        items = items.map(item => {
            return <CardItem key={item.name} item={item} />
        })
        sortedItems = sortedItems.map(item => {
            return <CardItem key={item.name} item={item} />
        })
        return (
            <section className='itemList'>
                <SectionTitle title="Explore restaurants in Helsinki" />
                <div className='wrapper'>
                    <button className='btn' onClick={this.sortData}>
                        {this.state.doSort ? 'Sort A-Z' : 'Unsort' }
                    </button>
                </div>
                <div className="itemList-center">
                    {loading ? <Loading /> : (this.state.doSort ? items : sortedItems)}
                </div>
            </section>
        )
    }
}