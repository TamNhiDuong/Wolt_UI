import React, { Component } from 'react';

import './caption.css';

export default class Caption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value });
    }

    searchData = (event) => {
        alert('Submitting:' + this.state.input);
        event.preventDefault();
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
                        style={{ paddingLeft: 10 }} />
                    <input
                        type='submit'
                        value='Search'
                        className='button'
                    >
                    </input>
                </form>
            </div>
        )
    }
}