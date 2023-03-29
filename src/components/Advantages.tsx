import React, {FC, useState} from 'react';

import {advantages} from '../../data';
import AccordionItem from './AccordionItem';

const Advantages: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean[]>(
        new Array(advantages.length).fill(false)
    );

    return (
        <div className='advantages-section-container'>
            <hr />
            <h2>Законный способ экономии электричества</h2>
            <span>Stability 24 обладает такими преимуществами:</span>
            <div className='advantages-block'>
                {advantages.map((adv) => {
                    return <AccordionItem key={adv.id} setIsOpen={setIsOpen} isOpen={isOpen} adv={adv} />
                })}
            </div>
        </div>
    );
};


export default Advantages;