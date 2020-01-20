import React from 'react';

import Slides from '../../components/slides/slides';

export default function Header({ children }) {
    return (
        <header>
            {children}
            <Slides />
        </header>
    )
}