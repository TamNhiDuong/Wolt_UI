import React from 'react';
import Carousel from 'nuka-carousel';

import sushi from '../../images/sushi/sushi.jpg';
import burger from '../../images/fastfood/burger.jpeg';
import noodle from '../../images/fastfood/noodle.jpg';
import salad from '../../images/salad/salad.jpeg';

export default function Slides() {
    return (
        <Carousel>
            <img src={burger} alt='burger' />
            <img src={noodle} alt='noodle' />
            <img src={salad} alt='salad' />
            <img src={sushi} alt='sushi'/>
        </Carousel>
    )
}
/*
 autoplay='true' disableEdgeSwiping='true' speed='2000' wrapAround
*/
