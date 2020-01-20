import React, { Component } from 'react';

import SectionTitle from '../sectionTitle/sectionTitle';
import Loading from '../loading/loading';
import CardItem from '../cardItem/cardItem';

import './itemList.css';

import { FoodContext } from '../../context';

export default class ItemList extends Component {
    static contextType = FoodContext;

    render() {
        let { loading, items } = this.context;
        items = items.map(item => {
            return <CardItem key={item.name} item={item} />
        })
        return (
            <section className='itemList'>
                <SectionTitle title="Food List" />
                <div className="itemList-center">
                    {loading ? <Loading /> : items}
                </div>
            </section>
        )
    }
}