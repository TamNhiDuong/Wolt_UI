import React from 'react';

import ItemList from '../itemList/itemList';
import Filters from '../filters/filters'; 

export default function FilterContainer() {
    return (
        <div>
            FilterContainer
            <Filters />
            <ItemList />
        </div>
    )
}