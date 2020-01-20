import React from 'react';

import Slides from '../../components/slides/slides';

import './header.css';

export default function Header({ children }) {
    return (
        <header className='header'>
            {children}
            <Slides />
        </header>
    )
}