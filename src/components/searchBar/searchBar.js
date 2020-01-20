import React, { Component } from 'react';

import './searchBar.css';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            input: '',
            data: [],
         };
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value });
    }

    searchData = () => {
    }

    render() {
        return (
            <div className='searchbar'>
                <h1 className='title'>Discover and get great food!</h1>
                <h4 className='description'>We deliver fresh food to your door</h4>
                <form onSubmit={this.searchData}>
                    <input
                        type='text'
                        value={this.state.input}
                        onChange={this.handleChange}
                        className='inputStyle' 
                        placeholder='what food are you looking for?'
                        style={{paddingLeft: 10}}/>
                    <input
                        type='submit'
                        value='Search'
                        className='button'
                    >
                    </input>
                </form>
                <div className='keyWords'>
                    <div className='row'>
                        <button className='keyWord'>sushi</button>
                        <button className='keyWord'>salad</button>
                        <button className='keyWord'>hamburger</button>
                    </div>
                    <div className='row'>
                        <button className='keyWord'>ramen</button>
                        <button className='keyWord'>steak</button>
                        <button className='keyWord'>asian</button>
                    </div>
                </div>
            </div>
        )
    }
}