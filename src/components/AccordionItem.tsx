import React, {Dispatch, FC, SetStateAction, useRef} from 'react';
import {Advantage} from '../../data';


interface AccordionItemProps {
    setIsOpen: Dispatch<SetStateAction<boolean[]>>
    isOpen: boolean[];
    adv: Advantage;

}

const AccordionItem: FC<AccordionItemProps> = ({isOpen, setIsOpen, adv}) => {

    const contentHeight = useRef<HTMLDivElement>(null);

    function clickHandle() {
        setIsOpen(
            isOpen.map((status, id) => id === adv.id ? !status : status)
        )
    }

    return (
        <div className='advantage-item'>
            <div className={`advantage-title ${isOpen[adv.id] ? 'isOpen' : ''}`} onClick={clickHandle}>
                <div className='advantage-title-left'>
                    <img src={adv.icon} alt='' />
                    <h3>{adv.title}</h3>
                </div>
                <div className='advantages-indicator' />
            </div>
            <div ref={contentHeight}
                 className={`advantage-text ${isOpen[adv.id] ? 'show' : ''}`}
                 style={isOpen[adv.id] ? {height: contentHeight.current?.scrollHeight} : {height: '0px'}}
            >
                <p>{adv.text}</p>
            </div>
        </div>
    );
};

export default AccordionItem;