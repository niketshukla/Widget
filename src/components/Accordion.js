import React, { useState } from 'react';

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const accItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active' : '';
        return (
            // React.Fragment is used instead of div as custom styling was applied when div was used. It was considering it an empty element.
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                    <i className='dropdown icon'></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    });
    return (
        <div className='ui styled accordion'>
            {accItems}
        </div>
    )
};

export default Accordion;